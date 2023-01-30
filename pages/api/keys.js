import { beats } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

// keys not included: c phrygian, d sharp harmonic minor, f harmonic minor
const allKeys = [
	"a flat minor", "a flat major", "a minor", "a major", "a sharp minor", "a sharp major",
	"b flat minor", "b flat major", "b minor", "b major", "b sharp minor", "b sharp major",
	"c flat minor", "c flat major", "c minor", "c major", "c sharp minor", "c sharp major",
	"d flat minor", "d flat major", "d minor", "d major", "d sharp minor", "d sharp major",
	"e flat minor", "e flat major", "e minor", "e major", "e sharp minor", "e sharp major",
	"f flat minor", "f flat major", "f minor", "f major", "f sharp minor", "f sharp major",
	"g flat minor", "g flat major", "g minor", "g major", "g sharp minor", "g sharp major",
];


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
	
	keys.sort();

	res.status(200).json(keys);
}
