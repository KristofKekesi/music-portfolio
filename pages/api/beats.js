import getBeats from "@/functions/api/beats";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async function handler(req, res) {
  const {
    query: {
      // equal
      bpm, name, release, key, license, tag,
      // ranges
      bpm_from, bpm_till, release_from, release_till, key_from, key_till,
      // selections and limits
      organise, exclude, limit },
    method,
  } = req;

  res.status(200).json(
    await getBeats({
      // equal
      bpm: bpm, name: name, release: release, key: key, license: license, tag: tag,
      // ranges
      bpm_from: bpm_from, bpm_till: bpm_till, release_from: release_from, release_till: release_till, key_from: key_from, key_till: key_till,
      // selections and limits
      organise: organise, exclude: exclude, limit: limit})
  );
}
