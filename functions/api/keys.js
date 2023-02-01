import { beats } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


// all keys sorted
const allKeys = [
	"a flat minor", "a flat major", "a minor", "a major", "a sharp minor", "a sharp major",
	"b flat minor", "b flat major", "b minor", "b major", "b sharp minor", "b sharp major",
	"c flat minor", "c flat major", "c minor", "c major", "c sharp minor", "c sharp major",
	"d flat minor", "d flat major", "d minor", "d major", "d sharp minor", "d sharp major",
	"e flat minor", "e flat major", "e minor", "e major", "e sharp minor", "e sharp major",
	"f flat minor", "f flat major", "f minor", "f major", "f sharp minor", "f sharp major",
	"g flat minor", "g flat major", "g minor", "g major", "g sharp minor", "g sharp major",
];


export default function getKeys({from = undefined, till = undefined} = {}) {
    const keys = [];
    beats.filter((beat) => {
        //filters
        if (allKeys.indexOf(beat.key) < allKeys.indexOf(from) && from != undefined) {
            return;
        }
        if (allKeys.indexOf(beat.key) > allKeys.indexOf(till) && till != undefined) {
            return;
        }

		if (!keys.includes(beat.key)) {
			keys.push(beat.key);
		}
	});

    // sort
    const sortedKeys = [];
    allKeys.forEach((key) => {
        if (keys.includes(key)) {
            sortedKeys.push(key);
        }
    });

    return sortedKeys;
}