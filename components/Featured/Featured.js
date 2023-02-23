import Link from "next/link";
import Image from "next/image";

import right from "@/public/right.svg";

import secondsToDisplay from "@/functions/secondsToDisplay";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Featured(props) {
    // PROPS:
    // title (String), beat (Object), type (String; latest or popular)

    const feature = props.type == "latest" ? props.beat.release : props.beat.allStreams + " streams";

    let key = props.beat.key.split(" ");
    let letter = key[0].toUpperCase();
    key.shift();
    key = key.join(" ");

    return (
        <div className={ props.className }>
            <h2 className="font-spaceGrotesk text-2xl px-4">{props.title}</h2>
            <div className="rounded-2xl bg-white/10 flex md:flex-row flex-col w-full">
                {props.beat.coverURL != undefined ? <Image src={ props.beat.coverURL } alt={"cover of " + props.beat.name} className="aspect-square bg-white/10 rounded-2xl" height={315} width={315} /> : <div className="bg-white/10 aspect-square rounded-2xl" style={{width: "315px", height: "315px"}} />}
                    <div className="flex flex-col justify-between p-6 md:p-8 w-full">
                        <div className="flex flex-col">
                            <p className="font-spaceGrotesk pt-0 text-sm opacity-60">{ feature }</p>
                            <div className="flex gap-4 items-baseline">
                                <p className="font-spaceGrotesk text-3xl">{ props.beat.name }</p>
                                <p className="font-spaceGrotesk text-base opacity-50">{ secondsToDisplay(props.beat.length) }</p>
                            </div>
                            <div className="flex flex-wrap gap-x-8 pt-4 whitespace-nowrap">
                                <p className="font-spaceGrotesk"><span className="text-2xl">{ props.beat.bpm.join(", ") }</span><span className="opacity-60">bpm</span></p>
                                <p className="font-spaceGrotesk"><span className="text-2xl">{ letter }</span><span className="opacity-60"> { key }</span></p>
                            </div>
                            <p className="font-spaceGrotesk opacity-60 text-justify xl:hidden">{ props.beat.description }</p>
                            <div className="flex flex-wrap gap-x-4 pt-4">
                                <p className="font-spaceGrotesk text-violet-600 hover:text-violet-400 transition-colors">#iayze</p>
                                <p className="font-spaceGrotesk text-fuchsia-600 hover:text-fuchsia-400 transition-colors">#domcorleo</p>
                                <p className="font-spaceGrotesk text-amber-600 hover:text-amber-400 transition-colors">#hardrock</p>
                            </div>
                        </div>
                        <Link href={ encodeURI(props.beat.links.url) } className="font-spaceGrotesk text-right text-2xl flex justify-end items-center">More<Image alt="More" className="p-1 w-12 h-12" src={right} /></Link>
                    </div>
                </div>
        </div>
    );
}
