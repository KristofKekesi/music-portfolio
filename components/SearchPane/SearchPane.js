import Image from "next/image";

import edit from "@/public/edit.svg";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function SearchPane(_) {
    return (
        <div className="h-screen fixed top-0 right-0 transition-transform border-l overflow-y-auto border-l-black bg-black/25 backdrop-blur-xl z-40 py-24 max-w-md" style={{minWidth: "350px"}}>
            <div className="border-b border-b-black py-8">
                <div className="px-8">
                    <div className="font-spaceGrotesk pt-2 text-xl">BPM:</div>
                    <div className="flex items-baseline gap-x-2">
                        <div className="flex items-baseline gap-x-0 bg-black/50 border text-center border-white/50 hover:border-white rounded-full px-2 group transition-colors">
                            <label for="bpm-min"><Image className="h-3" src={ edit } /></label>
                            <input type="number" id="bpm-min" name="bpm-min" defaultValue="100" min="100" max="172" className="active:text-white text-white/50 group-hover:text-white transition-colors font-spaceGrotesk bg-transparent" />
                        </div>
                        <span className="bold">-</span>
                        <div className="flex items-baseline gap-x-0 bg-black/50 border text-center border-white/50 hover:border-white rounded-full px-2 group transition-colors">
                            <label for="bpm-min"><Image className="h-3" src={ edit } /></label>
                            <input type="number" id="bpm-max" name="bpm-max" defaultValue="172" min="100" max="172" className="active:text-white text-white/50 group-hover:text-white transition-colors font-spaceGrotesk bg-transparent" />
                        </div>
                    </div>
                </div>
                <div className="font-spaceGrotesk pt-2 pb-1 px-8"><span className="text-xl">Keys:</span> <span className="text-md text-white/60">2 selected</span></div>
                <div className="flex gap-x-2 overflow-x-auto px-8">
                    <div className="bg-white/5 border  border-white rounded-full px-2 text-white transition-colors">A♭m</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">A♭M</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">Am</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">AM</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">A#m</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">A#M</div>
                    <div className="bg-white/5 border  border-white rounded-full px-2 text-white transition-colors">B♭m</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">B♭M</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">Bm</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">BM</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">B#m</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">B#M</div>
                </div>
                <div className="font-spaceGrotesk pt-2 pb-1 px-8"><span className="text-xl">Tags:</span> <span className="text-md text-white/60">1 selected</span></div>
                <div className="flex gap-x-2 overflow-x-auto px-8">
                    <div className="bg-white/5 border  border-white rounded-full px-2 text-white transition-colors">1rafmade</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">astroword</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">autumn</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">b4w2g</div>
                    <div className="bg-black/50 border border-white/50 hover:border-white rounded-full px-2 text-white/50 hover:text-white transition-colors">babysantana</div>
                </div>
            </div>
            <div className="p-8 pb-0 font-spaceGrotesk text-xl">Results</div>
            <div className="p-8 pt-1 flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <Image src="/covers/miss-you.jpg" className="rounded-xl" width={64} height={64} />
                    <div className="flex flex-col justify-start">
                        <div className="text-xl font-spaceGrotesk p-0">miss you</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors drop-shadow-tag-violet">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors drop-shadow-tag-fuschia">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
        </div>
    );
}