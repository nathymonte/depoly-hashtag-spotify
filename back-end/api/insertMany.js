import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistobj) => {
  const newArtistObj = { ...currentArtistobj };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongArray = songsArray.map((currentSongobj) => {
  const newSongobj = { ...currentSongobj };
  delete newSongobj.id;
  return newSongobj;
});

const reponseSongs = await db.collection("songs").insertMany(newSongArray);
const reponseArtits = await db.collection("artists").insertMany(newArtistArray);

console.log(reponseSongs);
console.log(reponseArtits);
