import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import { server } from "@/config";
import getBeats from "@/functions/api/beats";
import secondsToDisplay from "@/functions/secondsToDisplay";

import { Space_Grotesk } from "@next/font/google";

import bg from "../../public/bg.svg";
import Beat from "@/components/Beat/Beat";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700"});

export const getStaticPaths = async () => {
	const beats = await getBeats();

	const paths = [];
	beats.forEach(beat => {
        paths.push(beat.url.replace(server, ""))
    });

	return {
		paths: paths,
		fallback: false, 
	}
}


export default function BeatPage({ beat, beatsLikeThis }) {
    let key = beat.key.split(" ");
    let letter = key[0].toUpperCase();
    key.shift();
    key = key.join(" ");

    return (
        <>
            <Navbar />
            <main className="bg-cover bg-fixed min-h-screen flex flex-col gap-8 pt-24"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
                <div className="px-8">
                    <div className="flex gap-8 justify-between">
                            <div className="pt-8">
                                <h2 className={space_grotesk.className + " text-2xl px-4"}>About the Beat</h2>
                                <div className="bg-white/10 rounded-2xl flex" style={{height: "315px"}}>
                                {beat.links.youtube == undefined ? 
                                    beat.coverURL != undefined ? <Image src={ beat.coverURL } alt={"cover of " + beat.name} className="aspect-square bg-white/10 rounded-2xl" height={315} width={315} /> : <div className="bg-white/10 rounded-2xl aspect-square" style={{height: "315px", width: "315px"}} /> : null}
                                    <div className="flex flex-col p-6 md:p-8 w-full">
                                        <div className="flex flex-col">
                                            <p className={space_grotesk.className + " pt-0 text-sm opacity-60"}>{ beat.release }</p>
                                            <div className="flex gap-4 items-baseline">
                                                <p className={space_grotesk.className + " text-3xl"}>{ beat.name }</p>
                                                <p className={space_grotesk.className + " text-base opacity-50"}>{ secondsToDisplay(beat.length) }</p>
                                            </div>
                                            <div className="flex flex-wrap gap-x-8 pt-4 whitespace-nowrap">
                                                <p className={space_grotesk.className}><span className="text-2xl">{ beat.bpm.join(", ") }</span><span className="opacity-60">bpm</span></p>
                                                <p className={space_grotesk.className}><span className="text-2xl">{ letter }</span><span className="opacity-60"> { key }</span></p>
                                            </div>
                                            <p className={space_grotesk.className + " opacity-60 text-justify"}>{ beat.description }</p>
                                            <div className="flex flex-wrap gap-x-4 pt-4">
                                                <p className={space_grotesk.className + " text-violet-600 hover:text-violet-400 transition-colors"}>#iayze</p>
                                                <p className={space_grotesk.className + " text-fuchsia-600 hover:text-fuchsia-400 transition-colors"}>#domcorleo</p>
                                                <p className={space_grotesk.className + " text-amber-600 hover:text-amber-400 transition-colors"}>#hardrock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {(beat.links.youtube != undefined) ?
                            <div className="pt-8">
                                <h2 className={space_grotesk.className + " text-2xl px-4"}>Stream it on youtube</h2>
                                <iframe width="560" height="315" src={"https://www.youtube-nocookie.com/embed/" + beat.youtubeID + "?"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-2xl col-span-4 bg-black"></iframe>
                            </div>
                        : null}
                    </div>
                    {beat.links.beatstars != undefined ?
                    <div className="pt-8">
                        <h2 className={space_grotesk.className + " text-2xl px-4"}>License it on beatstars</h2>
                        <iframe src={"//www.beatstars.com/embed/track/?id=" + beat.beatstarsID} height="140" className="w-full rounded-2xl border border-black" style={{border: "none", background: "#30243c"}}></iframe>
                    </div> : null}
                </div>
                <div className="px-8">
                    <h2 className={space_grotesk.className + " text-2xl px-4"}>More like this</h2>
                    <div className="flex flex-row flex-wrap gap-4 justify-between" style={{gridTemplateColumns: "repeat(auto-fill, 128px)"}}>
                        { beatsLikeThis.map((beat) => {
                            return (
                                <Beat beat={beat} />
                            );
                        }) }
                        <div key="last" className="mx-auto" />
                    </div>
                </div>
                <Footer/>
            </main>
        </>
    );
}


export const getStaticProps = async ( params ) => {
	const beat = await getBeats({ id: decodeURI(params.params.name) })[0];
	const beatsLikeThis = await getBeats({ like: decodeURI(params.params.name), limit: 20 });
    
    if (beat.links.youtube != undefined) {
        beat.youtubeID = beat.links.youtube.split("v=")[1];
    }
    if (beat.links.beatstars != undefined) {
        beat.beatstarsID = beat.links.beatstars.split("TK")[1];
    }

	return {
		props: { beat: beat, beatsLikeThis: beatsLikeThis},
	};
};