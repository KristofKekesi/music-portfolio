import { beats } from "@/config";
import getTags from "@/functions/api/tags";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

  
export default function handler(req, res) {
  const {
    query: { _ },
    method,
  } = req;

  res.status(200).json(
    getTags()
  );
}
