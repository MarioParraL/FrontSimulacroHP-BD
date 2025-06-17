import { MongoClient } from "mongodb";

export type UserDB = {
  name: string;
  password: string;
};

const url = Deno.env.get("MONGO_URL");
if (!url) {
      Deno.exit(1);
}

const client = new MongoClient(url);
await client.connect();

const db = client.db("usersDB");
const UsersCollection = db.collection<UserDB>("users");

export default UsersCollection;
