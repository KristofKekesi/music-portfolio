import { beats } from "@/config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function getTags() {
    const tags = [];
    beats.forEach((beat) => {
        beat.tags.forEach((tag) => {if (!tags.includes(tag)){ tags.push(tag) }})
    });

    return tags;
}