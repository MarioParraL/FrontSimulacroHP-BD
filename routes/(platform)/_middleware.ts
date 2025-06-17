import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";

export const handler: MiddlewareHandler = async (
  req: Request,
  ctx: FreshContext,
) => {
  const headers = req.headers;
  const cookie = headers.get("cookie");
  const name_cookie = cookie?.split(";").find((c) =>
    c.trim().startsWith("name=")
  );
  const password_cookie = cookie?.split(";").find((c) =>
    c.trim().startsWith("password=")
  );

  if (name_cookie && password_cookie) {
    const next = await ctx.next();
    return next;
  }

  return new Response(null, {
    status: 302,
    headers: {
      location: "/",
    },
  });
};
