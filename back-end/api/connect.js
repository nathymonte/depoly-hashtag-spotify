// Javascrito Assincrono
// await async
// promise  fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://user:user123@cluster0.tgsfkrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);

//const artistCollection = await db.collection("artists").find({}).toArray();
//console.log(artistCollection);
