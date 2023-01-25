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

  const tags = [];
  beats.forEach((beat) => {
      beat.tags.forEach((tag) => {if (!tags.includes(tag)){ tags.push(tag) }})
  })

  res.status(200).json(tags);
}
