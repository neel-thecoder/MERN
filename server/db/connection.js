import { MongoClient } from "mongodb";

const uri = process.env.DB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

await client.connect();
await client.db("admin").command({ ping: 1 });
console.log("Connected to MongoDB!");

const db = client.db("employees");

export default db;
