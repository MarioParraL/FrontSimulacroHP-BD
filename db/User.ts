import { MongoClient } from "mongodb";

export type UserDB = {
  name: string;
  password: string;
};



const client = new MongoClient("mongodb+srv://mparral:MPLnebrija25_@nebrija-cluster.huut8.mongodb.net/?retryWrites=true&w=majority&appName=Nebrija-Cluster");
await client.connect();

const db = client.db("usersDB");
const UsersCollection = db.collection<UserDB>("users");

export default UsersCollection;
