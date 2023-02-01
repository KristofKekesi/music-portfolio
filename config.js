import beatsJSON from "./beats.json" assert {type: 'json'};


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export const beats = beatsJSON;

//* CONTACTS
export const youtube = "https://www.youtube.com/@jakimixedit";
export const soundcloud = "https://soundcloud.com/jakimixedit";
export const beatstars = "https://www.beatstars.com/jakimixedit";

//* SERVER
const DEV_LOCALHOST = "http://localhost:3000";
const DEV_PRODUCTION = "https://jakimixedit.vercel.app";

//* API
const DEV_SHOW_BEATS_WITHOUT_COVERS = true;

// DO NOT TOUCH
const isDev = process.env.NODE_ENV !== "production";
export const server = isDev ? DEV_LOCALHOST : DEV_PRODUCTION;

export const showBeatsWithoutCovers = isDev ? DEV_SHOW_BEATS_WITHOUT_COVERS : true;