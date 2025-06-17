import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "axios";
import Characters from "../components/Characters.tsx";

type Character = {
  id: string;
  name: string;
  house: string;
};

const HouseSelect: FunctionalComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [house, setHouse] = useState<string>("");
  const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"];

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/characters/house/${house}`,
      );
      const characters = response.data;
      setCharacters(characters);
    };

    getCharacters();
  }, [house]);

  return (
    <div>
      <p>Selecciona una casa</p>
      <select
        value={house}
        onChange={(e) => {
          const house = e.currentTarget.value;
          setHouse(house);

          document.cookie = `house=${house}; path=/`;
        }}
      >
        {houses.map((h) => {
          return <option value={h}>{h}</option>;
        })}
      </select>{" "}
      <br />

      <Characters characters={characters} />
    </div>
  );
};

export default HouseSelect;
