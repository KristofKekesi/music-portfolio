//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function secondsToDisplay(seconds) {
    const finalMinutes = Math.floor(seconds / 60);
    const finalSeconds = seconds % 60 < 10 ? "0" + (seconds % 60).toString() : (seconds % 60).toString();
    return finalMinutes.toString() + ":" + finalSeconds;
}