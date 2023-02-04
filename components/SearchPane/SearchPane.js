import Image from "next/image";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function SearchPane(_) {
    return (
        <div className="h-screen fixed top-0 right-0 transition-transform border-l overflow-y-auto border-l-black bg-black/25 backdrop-blur-xl z-40 py-24 max-w-md" style={{minWidth: "350px"}}>
            <div className="border-b border-b-black py-8">
                <div className="font-spaceGrotesk pt-2 px-8"><span className="text-xl">BPM:</span> <span className="text-md text-white/60">100-172</span></div>
                <input type="text" id="search-input" name="search-input" placeholder="100" className="bg-transparent active:text-white text-white/25 hover:text-white focus:text-white px-4 h-8 transition-colors" />
				<input type="text" id="search-input" name="search-input" placeholder="172" className="bg-transparent active:text-white text-white/25 hover:text-white focus:text-white px-4 h-8 transition-colors" />
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
                        <div className="text-xl font-spaceGrotesk p-0">Miss You</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
            <div className="px-8 pb-8 flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <Image src="/covers/miss-you.jpg" className="rounded-xl" width={64} height={64} />
                    <div className="flex flex-col justify-start">
                        <div className="text-xl font-spaceGrotesk p-0">Miss You</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
            <div className="px-8 pb-8 flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <Image src="/covers/miss-you.jpg" className="rounded-xl" width={64} height={64} />
                    <div className="flex flex-col justify-start">
                        <div className="text-xl font-spaceGrotesk p-0">Miss You</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
            <div className="px-8 pb-8 flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <Image src="/covers/miss-you.jpg" className="rounded-xl" width={64} height={64} />
                    <div className="flex flex-col justify-start">
                        <div className="text-xl font-spaceGrotesk p-0">Miss You</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
            <div className="px-8 pb-8 flex justify-between items-center">
                <div className="flex gap-x-4 items-center">
                    <Image src="/covers/miss-you.jpg" className="rounded-xl" width={64} height={64} />
                    <div className="flex flex-col justify-start">
                        <div className="text-xl font-spaceGrotesk p-0">Miss You</div>
                        <div className="flex gap-x-4">
                            <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                            <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                        </div>
                    </div>
                </div>
                <div className="text-md font-spaceGrotesk text-white/50">1:28</div>
            </div>
        </div>
    );
}