import Navbar from "@/components/Navbar/Navbar";

import { server } from "@/config";
import getBeats from "@/functions/api/beats";

import bg from "../../public/bg.svg";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function BeatPage({ _ }) {
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