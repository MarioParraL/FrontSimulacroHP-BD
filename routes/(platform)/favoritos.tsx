// routes/favoritos.tsx
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

export const handler: Handlers<Data> = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const cookie = req.headers.get("cookie") || "";
    const cookies = cookie.split("; ").map((c) => c.split("="));
    const favEntry = cookies.find(([key]) => key === "favorites");

    const ids = favEntry?.[1]?.split(",") ?? [];

    if (ids.length === 0) return ctx.render({ characters: [] });

    const response = await axios.get<Character[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    const filtered = response.data.filter((c) => ids.includes(c.id));

    return ctx.render({ characters: filtered });
  },
};

const Page = (props: PageProps<Data>) => {
  return <Characters characters={props.data.characters} />;
};

export default Page;
