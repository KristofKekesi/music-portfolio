import { beats } from "@/config";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async function handler(req, res) {
  res.status(200).json(beats);
}
