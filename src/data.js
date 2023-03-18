import { v4 as uuidv4 } from "uuid";
// song imports
import aedilAudio from "./music/aedil.mp3";
import badmundaAudio from "./music/BadMunda.mp3";
import girlineedyouAudio from "./music/GirlINeedYou.mp3";
import heerranghaAudio from "./music/HeerRanjha.mp3";
import ishqteraAudio from "./music/IshqTeraGuruRandhawa.mp3";
import jhoomejoAudio from "./music/JhoomeJoPathaan.mp3";
import mannmerijaanAudio from "./music/MaanMeriJaan.mp3";
// cover imports
import aedilCover from "./covers/aedil.jpg";
import badmundaCover from "./covers/badmunda.jpg";
import girlineedyouCover from "./covers/girlineedyou.jpg";
import heerranghaCover from "./covers/heerrangha.jpg";
import ishqteraCover from "./covers/ishqtera.jpg";
import jhoomejoCover from "./covers/jhoomejo.jpeg";
import mannmerijaanCover from "./covers/mannmerijaan.jpg";

function chillHop() {
  return [
    {
      name: "Ae Dil Hai Mushkil",
      cover: aedilCover,
      artist: "Arijit Singh",
      audio: aedilAudio,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
      test: ()=>{new Audio("./aedil.mp3").play()}
    },
    {
      name: "Bad Munda",
      cover: badmundaCover,
      artist: "Jass Manak",
      audio: badmundaAudio,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Girl I Need You",
      cover: girlineedyouCover,
      artist: "Arijit Singh, Khushboo",
      audio: girlineedyouAudio,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Heer Rangha",
      cover: heerranghaCover,
      artist: "Rito Riba",
      audio: heerranghaAudio,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ishq Tera",
      cover: ishqteraCover,
      artist: "Guru Randhawa",
      audio: ishqteraAudio,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jhoome Jo Pathaan",
      cover: jhoomejoCover,
      artist: "Arijit Singh, Sukriti Kakar",
      audio: jhoomejoAudio,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mann Meri Jaan",
      cover: mannmerijaanCover,
      artist: "king",
      audio: mannmerijaanAudio,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
