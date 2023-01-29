import Head from "next/head";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";

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
						<Featured className="col-span-4 w-full" title="Latest Drop" beat={beats[0]} type="latest" />
						<Featured className="col-span-4 w-full" title="Most Popular" beat={mostPopularBeat} type="popular" />
						<RandomBeat className="col-span-8" beat={randomBeat} />
						<div className="col-span-8">
						<h2 className={space_grotesk.className + " text-2xl px-4"}>All Beats <span className="text-sm opacity-60">({beats.length})</span></h2>
							<div className="flex flex-row flex-wrap gap-4 justify-between" style={{gridTemplateColumns: "repeat(auto-fill, 128px)"}}>
								{ beats.map((beat) => {
									let name = (beat.name.substring(0, 10));
									if (beat.name !== name && beat.name.length >= 13 ) {
										name += "...";
									} else {
										name = beat.name;
									}

									return (
										<>
											<Link key={beat.cover} href={ encodeURI(beat.url) } className="flex flex-col justify-center items-center content-center group col-span-1">
												<div className="a h-32 w-32 bg-white/20 rounded-2xl"></div>
												<span className={space_grotesk.className + " text-base transition-colors text-white/60 group-hover:text-white"}>{ name }</span>
											</Link>
											{beat == beats[beats.length - 1] ? <div key="last" className="a mx-auto" /> : undefined}
										</>
									);
								}) }
							</div>
						</div>
					</div>
				</div>
				<footer className="flex flex-row items-top justify-between items-center w-full p-8 pt-4 pb-4 gap-8 z-50 border-y border-black bg-black/25 backdrop-blur-xl">
					<div className="flex flex-row items-top justify-start items-center gap-2">
						<div className={ space_grotesk.className + " text-base text-white/60"}>Made by <Link href="https://www.kekesi.dev" className="text-white">Kristof Kekesi</Link> for</div>
						<h1 className={space_grotesk.className + " text-2xl"}>
							Jaki<span className={"a -ml-1 italic tracking-tighter text-white/50 inline-block"}>mixed</span>it
						</h1>
					</div>
					<div className={ space_grotesk.className + " text-base text-white/60"}>Copyright © 2023 Jakimixedit. All Rights Reserved.</div>
				</footer>
				<iframe src="//www.beatstars.com/embed/track/?id=13580069" height="140" className="w-screen px-3" style={{border: "none", background: "#30243c"}}></iframe>
			</main>
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const beats = await getBeats(); 
	const mostPopularBeat = await getBeats({ organise: "streams" }).reverse()[0];
	const randomBeat = await getBeats().sort( () => .5 - Math.random() )[0];

	return {
		props: {
			beats: beats,
			mostPopularBeat: mostPopularBeat,
			randomBeat: randomBeat
		}
	};
};
