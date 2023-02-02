//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function SearchPane(_) {
    return (
        <div className="h-screen fixed top-0 right-0 transition-transform border-l border-l-black bg-black/25 backdrop-blur-xl z-40 pt-28 px-8" style={{minWidth: "350px"}}>
            Filters
            BPM
            <div>Value</div>
            <label for="max_bpm">MIN</label>
            <input type="range" id="max_bpm" name="max_bpm" min="103" max="172" defaultValue={103}/>
            <label for="max_bpm">MAX</label>
            Keys
            <div>
</div>
            Tags
            Results
        </div>
    );
}