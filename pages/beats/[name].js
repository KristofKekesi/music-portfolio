import Navbar from "@/components/Navbar/Navbar";

import { server } from "@/config";
import getBeats from "@/functions/api/beats";

import bg from "../../public/bg.svg";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


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
            <main className="bg-cover bg-fixed min-h-screen"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
            </main>
        </>
    );
}


export const getStaticProps = async ( params ) => {
	const beat = await getBeats({ id: decodeURI(params.params.name) });

	return {
		props: { beat: beat[0]},
	};
};