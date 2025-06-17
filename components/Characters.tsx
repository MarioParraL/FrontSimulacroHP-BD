import { FunctionalComponent } from "preact";

type Character = {
  id: string;
  name: string;
  house: string;
};

type Props = {
  characters: Character[];
};

const Characters: FunctionalComponent<Props> = (props) => {
  return (
    <div>
      {props.characters.map((ch) => {
        return (
          <div>
            <a href={`/character/${ch.id}`}>
              <div>
                <h2>{ch.name}</h2>
                <p>{ch.house}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
