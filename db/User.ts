import { MongoClient } from "mongodb";

export type UserDB = {
  name: string;
  password: string;
};

const url = Deno.env.get("MONGO_URL");
if (!url) {
   console.error("Need a MONGO_URL");
}

const client = new MongoClient(url);
await client.connect();

const db = client.db("usersDB");
const UsersCollection = db.collection<UserDB>("users");

export default UsersCollection;
