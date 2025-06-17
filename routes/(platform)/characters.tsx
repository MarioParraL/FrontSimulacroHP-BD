import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import Characters from "../../components/Characters.tsx";
type Character = {
  id: string;
  name: string;
  house: string;
};

type Data = {
  characters: Character[];
};
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const response = await axios.get<Character[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    const characters = response.data;
    return ctx.render({ characters });
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <div>
      <h2>Todos los characters</h2>
      <Characters {...props.data} />
    </div>
  );
};

export default Page;
