import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import Char from "../../../components/Char.tsx";
import FavButton from "../../../islands/FavButton.tsx";

type Character = {
  id: string;
  name: string;
  house: string;
  species: string;
  gender: string;
  image: string;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character>) => {
    const id = ctx.params.id;
    const response = await axios.get<Character[]>(
      `https://hp-api.onrender.com/api/character/${id}`,
    );
    const character = response.data[0];
    return ctx.render(character);
  },
};

const Page = (props: PageProps<Character>) => {
  return (
    <div>
      <FavButton characterId={props.data.id} />
      <Char {...props.data} />
    </div>
  );
};

export default Page;
