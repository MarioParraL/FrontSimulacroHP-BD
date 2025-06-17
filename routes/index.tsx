import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import LoginForm from "../components/LoginForm.tsx";
import UsersCollection from "../db/User.ts";

type Data = {
  error?: string;
};
export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<Data>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const password = url.searchParams.get("password");
    const mode = url.searchParams.get("mode");
    if (!name || !password) {
      return ctx.render();
    }

    const existingUser = await UsersCollection.findOne({ name });

    if (mode === "register") {
      if (existingUser) {
        return ctx.render({ error: "Ese nombre de usuario ya existe." });
      }

      await UsersCollection.insertOne({ name, password });
    } else if (mode === "login") {
      if (!existingUser || existingUser.password !== password) {
        return ctx.render({ error: "Usuario o contraseña incorrectos." });
      }
    }

    const headers = new Headers();
    headers.append("Set-Cookie", `name=${name}; path=/`);
    headers.append("Set-Cookie", `password=${password}; path=/`);
    headers.append("location", "/characters");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};

const Page = (props: PageProps<Data>) => {
  return <LoginForm error={props.data?.error} />;
};

export default Page;
