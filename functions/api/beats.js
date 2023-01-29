import { beats, server } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


function organiseBeats(beats, organise) {
	function dynamicSort(property) {
		var sortOrder = 1;
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}


	// organise
	switch (organise) {
		case "name": 
			return beats.sort(dynamicSort("name"));
		case "bpm": 
			return beats.sort(dynamicSort("maxBPM"));
		case "release": 
			return beats.sort(dynamicSort("release"));
		case "key": 
			return beats.sort(dynamicSort("key"));
		case "streams": 
			return beats.sort(dynamicSort("allStreams"));
		default: return beats.sort(dynamicSort("release")).reverse();
	}
}


export default function getBeats({id = undefined, bpm = undefined, name = undefined, release = undefined, key = undefined, tag = undefined, license = undefined, organise = undefined} = {}) {
	// TODO(KristofKekesi): from till query parameters eg: bpm_from=100 bpm_till=110
	// TODO(KristofKekesi): exclude beats
	return organiseBeats(beats.filter(beat => {
		// organise values
		beat.tags.sort();

		// add computed values
		beat.url = server + "/beats/" + beat.id;
		beat.allStreams = beat.streams.youtube + beat.streams.beatstars;
		beat.maxBPM = Math.max.apply(Math, beat.bpm);
		beat.minBPM = Math.min.apply(Math, beat.bpm);

		// filters
		if (beat.id != id && id != undefined) {
			return;
		}
		if (beat.name != name && name != undefined) {
			return;
		}
		if (beat.release != release && release != undefined) {
			return;
		}
		if (beat.key != key && key != undefined) {
			return;
		}
		if (beat.license != license && license != undefined) {
			return;
		}
		if (beat.bpm != bpm && bpm != undefined) {
			return;
		}
		if (!beat.tags.includes(tag) && tag != undefined) {
			return;
		}

		return beat;
	}), organise);
}