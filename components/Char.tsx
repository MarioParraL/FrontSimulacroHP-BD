import { FunctionalComponent } from "preact";

type Character = {
  id: string;
  name: string;
  house: string;
  species: string;
  gender: string;
  image: string;
};

const Char: FunctionalComponent<Character> = (props) => {
  return (
    <div>
      <a href={`/character/${props.id}`}>
        <div>
          <h2>{props.name}</h2>
          <p>{props.house}</p>
          <p>{props.species}</p>
          <p>{props.gender}</p>
          <img src={props.image} alt={props.name} width={200}></img>
        </div>
      </a>
    </div>
  );
};

export default Char;
