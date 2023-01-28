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
    //beat (Object), type (String; latest or popular)

    return (
        <div className="w-full">
            <h2 className={space_grotesk.className + " text-2xl px-4"}>Random Beat</h2>
            <div className="rounded-2xl bg-white/10 flex flex-row items-center justify-between p-6 md:p-8" style={{background: "linear-gradient(84deg, rgba(238,174,202,0.2) 0%, rgba(238,174,202,0.2) 35%, rgba(195,180,217,0.2085609243697479) 58%, rgba(148,187,233,0.3460959383753502) 100%)"}}>
                <div className="flex gap-4 items-baseline">
                    <p className={space_grotesk.className + " text-3xl"}>{ props.beat.name }</p>
                    <p className={space_grotesk.className + " text-base opacity-50"}>{ props.beat.length }</p>
                </div>
                <div className="flex flex-row gap-24 items-center">
                    <div className="flex flex-col">
                        <div className="flex gap-8">
                            <p className={space_grotesk.className}><span className="text-2xl">{ props.beat.bpm }</span><span className="opacity-60">bpm</span></p>
                            <p className={space_grotesk.className}><span className="text-2xl">F</span><span className="opacity-60"> major</span></p>
                        </div>
                        <p className={space_grotesk.className + " opacity-60 text-justify"}>{ props.beat.description }</p>
                    </div>
                    <Link href={ props.beat.url } className={space_grotesk.className + " text-2xl flex justify-end items-center"}>More<Image alt="More" className="p-1 w-12 h-12" src={right}></Image></Link>
                </div>
            </div>
        </div>
    );
}

/**
<div className="flex flex-row p-6 md:p-8">
                    <div className="flex flex-row gap-8">
                        <div className="flex gap-4 items-baseline">
                            <p className={space_grotesk.className + " text-3xl"}>{ props.beat.name }</p>
                            <p className={space_grotesk.className + " text-base opacity-50"}>{ props.beat.length }</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                            <div className="flex gap-8 pt-4">
                                <p className={space_grotesk.className}><span className="text-2xl">{ props.beat.bpm }</span><span className="opacity-60">bpm</span></p>
                                <p className={space_grotesk.className}><span className="text-2xl">F</span><span className="opacity-60"> major</span></p>
                            </div>
                            <p className={space_grotesk.className + " opacity-60 text-justify"}>{ props.beat.description }</p>
                        </div>
                    <Link href={ props.beat.url } className={space_grotesk.className + " text-right pt-12 text-2xl flex justify-end items-center"}>More<Image alt="More" className="p-1 w-12 h-12" src={right}></Image></Link>
                </div>**/