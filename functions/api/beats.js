const fs = require("fs");

import { beats, server, showBeatsWithoutCovers } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


// TODO(KristofKekesi): from till query parameters, random beat
export default async function getBeats({
	// equal
	id = undefined, bpm = undefined, name = undefined, release = undefined, key = undefined, tag = undefined, license = undefined, 
	// ranges
	bpm_from = undefined, bpm_till = undefined, release_from = undefined, release_till = undefined, key_from = undefined, key_till = undefined,
	// selections and limits
	organise = undefined, exclude = undefined, limit = undefined, getStreams = false} = {}) {
		const getStreamsData = organise == "streams" ? true : getStreams;


		let finalBeats = beats.filter(async beat => {
			// organise values
			beat.tags.sort();


			// add computed values
			beat.url = server + "/beats/" + beat.id;
			if (beat.cover != "") {beat.coverURL = "/covers/" + beat.cover};

			if (getStreamsData && beat.links.youtube != undefined) {
				const ytID = beat.links.youtube.split("v=")[1];

				const apiURL = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + ytID + "&key=API_KEY";

				const res = await fetch(apiURL);
				const json = await res.json();

				console.log(json.items[0].statistics);
			}

			beat.allStreams = 0;
			beat.maxBPM = Math.max.apply(Math, beat.bpm);
			beat.minBPM = Math.min.apply(Math, beat.bpm);


			// filters
			// equal
			if (!showBeatsWithoutCovers && beat.coverURL == undefined) {
				return;
			}
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
			// ranges
			if (beat.minBPM < bpm_from && beat.maxBPM < bpm_from && bpm_from != undefined) {
				return;
			}
			if (beat.minBPM > bpm_till && beat.maxBPM > bpm_till && bpm_till != undefined) {
				return;
			}
			if (beat.release < release_from && release_from != undefined) {
				return;
			}
			if (beat.release > release_till && release_till != undefined) {
				return;
			}

			return beat;
		});
	

		// exclude
		if (exclude != undefined) {
			const blackList = exclude.split(",");
			finalBeats = finalBeats.filter(beat => {
				if (blackList.includes(beat.id)) {
					return;
				}
				return beat;
			});
		}
	
	
		// organise
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

		switch (organise) {
			case "name": 
				finalBeats.sort(dynamicSort("name"));
				break;
			case "bpm": 
				finalBeats.sort(dynamicSort("maxBPM"));
				break;
			case "release": 
				finalBeats.sort(dynamicSort("release"));
				break;
			case "key": 
				finalBeats.sort(dynamicSort("key"));
				break;
			case "streams": 
				finalBeats = beats.sort(dynamicSort("allStreams")).reverse();
				break;
			default:
				finalBeats = beats.sort(dynamicSort("release")).reverse();
				break;
		}
	

		// limit
		if (limit != undefined && limit > -1) {
			finalBeats = finalBeats.slice(0, limit);
		}

		return finalBeats;
	}