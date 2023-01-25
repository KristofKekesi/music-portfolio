import { beats } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function handler(req, res) {
  const {
    query: { bpm, name, release, key, license, tag, organise, descending },
    method,
  } = req;

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
      beats.sort(dynamicSort("name"));
      break;
    case "bpm": 
      beats.sort(dynamicSort("bpm"));
      break;
    case "release": 
      beats.sort(dynamicSort("release"));
      break;
    case "key": 
      beats.sort(dynamicSort("key"));
      break;
  }

  if (descending == true || descending == "") {
    beats.reverse()
  }

  res.status(200).json(beats.filter(beat => {
    // organise values
    beat.tags.sort();

    // filters
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
  }))
}
