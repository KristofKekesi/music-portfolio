import Link from "next/link";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Footer(props) {
    return (
        <footer className={"flex flex-row items-top justify-between items-center w-full px-8 py-4 gap-8 z-50 border-y border-black bg-black/25 backdrop-blur-xl " + props.className}>
            <div className="flex flex-row items-top justify-start items-center gap-2">
                <div className="font-spaceGrotesk text-base text-white/60">Made by <Link href="https://www.kekesi.dev" className="text-white">Kristof Kekesi</Link> for</div>
                <h1 className="font-spaceGrotesk text-2xl">
                    Jaki<span className={"-ml-1 italic tracking-tighter text-white/50 inline-block"}>mixed</span>it
                </h1>
            </div>
            <div className="font-spaceGrotesk text-base text-white/60">Copyright © 2023 Jakimixedit. All Rights Reserved.</div>
        </footer>
    );
}