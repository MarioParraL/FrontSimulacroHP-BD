import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { MongoClient } from "mongodb";

export type UserDB = {
  name: string;
  password: string;
};

const env = await load();
const url = env.MONGO_URL || Deno.env.get("MONGO_URL");
if (!url) {
  throw new Error("MONGO_URL is not set");
}

const client = new MongoClient(url);
await client.connect();

const db = client.db("usersDB");
const UsersCollection = db.collection<UserDB>("users");

export default UsersCollection;
