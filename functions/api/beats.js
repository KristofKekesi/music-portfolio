import { beats, server } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


function organiseBeats(beats, organise, exclude, limit) {
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

	// exclude
	if (exclude != undefined) {
		const blackList = exclude.split(",");
		beats = beats.filter(beat => {
			if (blackList.includes(beat.id)) {
				return;
			}
			return beat;
		});
	}


	// organise
	switch (organise) {
		case "name": 
			beats.sort(dynamicSort("name"));
			break;
		case "bpm": 
			beats.sort(dynamicSort("maxBPM"));
			break;
		case "release": 
			beats.sort(dynamicSort("release"));
			break;
		case "key": 
			beats.sort(dynamicSort("key"));
			break;
		case "streams": 
			beats.sort(dynamicSort("allStreams"));
			break;
		default:
			beats.sort(dynamicSort("release")).reverse();
			break;
	}

	// limit
	if (limit != undefined && limit > -1) {
		beats = beats.slice(0, limit);
	}

	return beats;
}

// TODO(KristofKekesi): from till query parameters
export default function getBeats({
	// equal
	id = undefined, bpm = undefined, name = undefined, release = undefined, key = undefined, tag = undefined, license = undefined, 
	// ranges
	bpm_from = undefined, bpm_till = undefined, release_from = undefined, release_till = undefined, key_from = undefined, key_till = undefined,
	// selections and limits
	organise = undefined, exclude = undefined, limit = undefined} = {}) {
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
	}), organise, exclude, limit);
}