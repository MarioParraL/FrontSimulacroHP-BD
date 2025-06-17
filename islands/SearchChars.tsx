import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "axios";
import Characters from "../components/Characters.tsx";

type Character = {
  id: string;
  name: string;
  house: string;
};

const SearchChars: FunctionalComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [filtered, setFiltered] = useState<Character[]>([]);

  useEffect(() => {
    const getcharacters = async () => {
      const response = await axios.get<Character[]>(
        "https://hp-api.onrender.com/api/characters",
      );
      const characters = response.data;
      setCharacters(characters);
    };

    getcharacters();
  }, []);

  useEffect(() => {
    const filter = characters.filter((c) =>
      c.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    );
    setFiltered(filter);
  }, [searchName]);

  return (
    <div>
      <div>
        <h2>Buscar por nombre</h2>
        <input
          type="text"
          placeholder="Busca por nombre"
          value={searchName}
          onInput={(e) => setSearchName(e.currentTarget.value)}
        >
        </input>
      </div>

      <div>
        <Characters characters={filtered} />
      </div>
    </div>
  );
};

export default SearchChars;
