import Image from "next/image";
import Link from "next/link";

import secondsToDisplay from "@/functions/secondsToDisplay";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function BeatResult(props) {
    // PROPS:
    // beat (Object)

    return (
        <div className="px-8 pt-1 pb-5 flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
                { props.beat.coverURL != undefined ? <Image src={ props.beat.coverURL } className="rounded-xl" width={64} height={64} /> : <div className=" bg-white/10 aspect-square rounded-x w-16 r-16" /> }
                <div className="flex flex-col justify-start">
                    <div className="text-xl font-spaceGrotesk p-0">{ props.beat.name }</div>
                    <div className="flex gap-x-4">
                        <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors drop-shadow-tag-violet">#iayze</p>
                        <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors drop-shadow-tag-fuschia">#domcorleo</p>
                    </div>
                </div>
            </div>
            <div className="text-md font-spaceGrotesk text-white/50">{ secondsToDisplay(props.beat.length) }</div>
        </div>
    );
}