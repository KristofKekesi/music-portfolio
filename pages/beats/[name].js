import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import { server } from "@/config";
import getBeats from "@/functions/api/beats";

import { Space_Grotesk } from "@next/font/google";

import bg from "../../public/bg.svg";


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


export default function BeatPage({ beat }) {
    return (
        <>
            <Navbar />
            <main className="bg-cover bg-fixed min-h-screen flex flex-col gap-8 pt-24"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
                {beat.links.beatstars != undefined ?
                    <div className="px-8 pt-8">
                        <h2 className={space_grotesk.className + " text-2xl px-4"}>License it on beatstars</h2>
                        <iframe src={"//www.beatstars.com/embed/track/?id=" + beat.beatstarsID} height="140" className="w-full rounded-2xl border border-black" style={{border: "none", background: "#30243c"}}></iframe>
                    </div> : null
                }
                <div className="px-8">
                    {(beat.links.youtube != undefined && beat.links.beatstars == undefined) ?
                        <div className="pt-8">
                            <h2 className={space_grotesk.className + " text-2xl px-4"}>Stream it on youtube</h2>
                            <iframe width="560" height="315" src={"https://www.youtube-nocookie.com/embed/" + beat.youtubeID + "?controls=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-2xl col-span-4 bg-black"></iframe>
                        </div>
                     : <>
                         <h2 className={space_grotesk.className + " text-2xl px-4"}>About the Beat</h2><div style={{height: "315px"}} className="aspect-square bg-white/10 rounded-2xl" />
                     </>
                    }
                </div>
                <div className="px-8">
                    <h2 className={space_grotesk.className + " text-2xl px-4"}>More like this</h2>
                </div>
                <Footer/>
            </main>
        </>
    );
}


export const getStaticProps = async ( params ) => {
	const beat = await getBeats({ id: decodeURI(params.params.name) })[0];

    if (beat.links.youtube != undefined) {
        beat.youtubeID = beat.links.youtube.split("v=")[1];
    }
    if (beat.links.beatstars != undefined) {
        beat.beatstarsID = beat.links.beatstars.split("TK")[1];
    }

	return {
		props: { beat: beat},
	};
};