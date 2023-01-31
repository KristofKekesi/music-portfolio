import Link from "next/link";
import Image from "next/image";

import { Space_Grotesk } from "@next/font/google";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700"});

export default function Beat(props) {
    // PROPS
    // beat (Object)
    let name = (props.beat.name.substring(0, 10));
    if (props.beat.name !== name && props.beat.name.length >= 13 ) {
        name += "...";
    } else {
        name = props.beat.name;
    }
    
    return (
        <Link key={ props.beat.id } href={ encodeURI(props.beat.url) } className="flex flex-col justify-center items-center content-center group col-span-1">
            <div className="mt-2">
                {props.beat.coverURL != undefined ? <>
                    <Image src={ props.beat.coverURL } width={128} height={128} alt={"Cover of " + props.beat.name} className="bg-white/20 rounded-2xl blur-md opacity-25 saturate-200" />
                    <Image src={ props.beat.coverURL } width={128} height={128} alt={"Cover of " + props.beat.name} className="bg-white/20 rounded-2xl -translate-y-full absolute opacity-100 -mt-2" />
                </> : <div className="h-32 w-32 bg-white/20 -mt-2 mb-2 rounded-2xl" />
                }
            </div>
            <span className={space_grotesk.className + " text-base transition-colors text-white/60 group-hover:text-white"}>{ name }</span>
        </Link>
    );
}