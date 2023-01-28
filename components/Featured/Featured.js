import Link from "next/link";
import Image from "next/image";

import { Space_Grotesk } from "@next/font/google";

import right from "../../public/right.svg";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700"});

//TODO(KristofKekesi)
export default function Featured(props) {
    // PROPS:
    // title (String), beat (Object), type (String; latest or popular)

    const feature = props.type == "latest" ? props.beat.release : props.beat.allStreams + " streams";

    return (
        <div>
            <h2 className={space_grotesk.className + " text-2xl px-4"}>{props.title}</h2>
            <div className="rounded-2xl bg-white/10 flex md:flex-row flex-col max-w-2xl">
                <div className="h-96 w-96 min-h-fit min-w-fit bg-white/10 rounded-2xl"></div>
                    <div className="flex flex-col justify-between p-6 md:p-8">
                        <div className="flex flex-col">
                            <p className={space_grotesk.className + " md:pt-0 pt-2 text-sm opacity-60"}>{ feature }</p>
                            <div className="flex gap-4 items-baseline">
                                <p className={space_grotesk.className + " text-3xl"}>{ props.beat.name }</p>
                                <p className={space_grotesk.className + " text-base opacity-50"}>{ props.beat.length }</p>
                            </div>
                            <div className="flex gap-8 pt-4">
                                <p className={space_grotesk.className}><span className="text-2xl">{ props.beat.bpm }</span><span className="opacity-60">bpm</span></p>
                                <p className={space_grotesk.className}><span className="text-2xl">F</span><span className="opacity-60"> major</span></p>
                            </div>
                            <p className={space_grotesk.className + " opacity-60 text-justify"}>{ props.beat.description }</p>
                            <div className="flex gap-4">
                                <p className={space_grotesk.className + " pt-4 text-violet-600 hover:text-violet-400 transition-colors"}>#iayze</p>
                                <p className={space_grotesk.className + " pt-4 text-fuchsia-600 hover:text-fuchsia-400 transition-colors"}>#domcorleo</p>
                                <p className={space_grotesk.className + " pt-4 text-amber-600 hover:text-amber-400 transition-colors"}>#hardrock</p>
                            </div>
                        </div>
                        <Link href={ props.beat.url } className={space_grotesk.className + " text-right pt-12 text-2xl flex justify-end items-center"}>More<Image alt="More" className="p-1 w-12 h-12" src={right}></Image></Link>
                    </div>
                </div>
        </div>
    );
}