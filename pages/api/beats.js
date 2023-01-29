import getBeats from "@/functions/api/beats";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function handler(req, res) {
  const {
    // TODO(KristofKekesi): from till query parameters eg: bpm_from=100 bpm_till=110
    query: { bpm, name, release, key, license, tag, organise, exclude },
    method,
  } = req;

  res.status(200).json(
    getBeats({bpm: bpm, name: name, release: release, key: key, license: license, tag: tag, organise: organise, exclude: exclude})
  );
}
