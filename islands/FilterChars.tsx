import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import axios from "axios";
import Characters from "../components/Characters.tsx";

type Character = {
  id: string;
  name: string;
  house: string;
};

const FilterChars: FunctionComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [discipline, setDiscipline] = useState<string | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/characters/${discipline}`,
      );
      const characters = response.data;
      setCharacters(characters);
    };

    getCharacters();
  }, [discipline]);

  return (
    <div>
      <h2>Elige una disciplina</h2>
      <button
        type={"submit"}
        value={"students"}
        onClick={(e) => setDiscipline(e.currentTarget.value)}
      >
        Students
      </button>

      <button
        type={"submit"}
        value={"staff"}
        onClick={(e) => setDiscipline(e.currentTarget.value)}
      >
        Staff
      </button>
      <div>
        <Characters characters={characters} />
      </div>
    </div>
  );
};

export default FilterChars;
