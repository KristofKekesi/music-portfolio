import { beats } from "@/config";


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

    const keys = [];
    beats.forEach((beat) => {
        if (!keys.includes(beat.key)) {
            keys.push(beat.key);
        }
    })
  
    res.status(200).json(keys);
  }
  