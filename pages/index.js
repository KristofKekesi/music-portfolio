import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Beat from "@/components/Beat/Beat";

import { Space_Grotesk } from "@next/font/google";

import bg from "../public/bg.svg";

import Featured from "@/components/Featured/Featured";
import RandomBeat from "@/components/RandomBeat/RandomBeat";

import getBeats from "@/functions/api/beats";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700"});

export default function Home({ beats, mostPopularBeat, randomBeat }) {	
	return (
		<>
			<Head>
				<title>Jakimixedit</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-cover bg-fixed min-h-screen"
			style={{
				backgroundImage: `url(${bg.src})`,
			}}>
				<Navbar />
				<div className="flex justify-center self-center pt-24">
					<div className="grid grid-cols-8 p-8 gap-8">
						<Featured className="xl:col-span-4 col-span-8 w-full" title="Latest Drop" beat={beats[0]} type="latest" />
						<Featured className="xl:col-span-4 col-span-8 w-full" title="Most Popular" beat={mostPopularBeat} type="popular" />
						<RandomBeat className="col-span-8" beat={randomBeat} />
						<div className="col-span-8">
							<h2 className={space_grotesk.className + " text-2xl px-4"}>All Beats <span className="text-sm opacity-60">({beats.length})</span></h2>
							<div className="flex flex-row flex-wrap gap-4 justify-between" style={{gridTemplateColumns: "repeat(auto-fill, 128px)"}}>
								{ beats.map((beat) => {
									return (
										<Beat beat={beat} />
									);
								}) }
								<div key="last" className="mx-auto" />
							</div>
						</div>
					</div>
				</div>
				<Footer />
				<iframe src="//www.beatstars.com/embed/track/?id=13580069" height="140" className="w-screen px-3" style={{border: "none", background: "#30243c"}}></iframe>
			</main>
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const beats = await getBeats(); 
	const mostPopularBeat = await getBeats({ organise: "streams" }).reverse()[0];
	const randomBeat = await getBeats({exclude: beats[0].id + "," + mostPopularBeat.id}).sort( () => .5 - Math.random() )[0];

	return {
		props: {
			beats: beats,
			mostPopularBeat: mostPopularBeat,
			randomBeat: randomBeat
		},
		revalidate: 10
	};
};
