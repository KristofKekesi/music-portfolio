import Image from "next/image";
import Link from "next/link";

import { youtube, soundcloud, beatstars } from "@/config";
import filter from "../../public/filter.svg";

import { Space_Grotesk } from "@next/font/google";

import { useEffect } from "react";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700"});

//TODO(KristofKekesi)
export default function Navbar(_) {
    useEffect(() => {
		window.addEventListener("scroll", _ => {
			const navItems = Array.from(document.getElementsByClassName("nav-item"));

			if (document.getElementsByTagName("html")[0].getAttribute("selected") != "") {
				if(document.getElementsByTagName("main")[0].getBoundingClientRect().top > -42) {
					document.getElementById("header").classList.remove("border-b", "border-black", "bg-black/25", "backdrop-blur-xl");
					document.getElementById("search-bar").classList.remove("translate-y-1/2", "bg-white/20");
					document.getElementById("search-bar").classList.add("bg-white/10");

					navItems.forEach(element => {
						element.classList.remove("translate-y-1/4");
					});
				} else {
					document.getElementById("header").classList.add("border-b", "border-black", "bg-black/25", "backdrop-blur-xl");
					document.getElementById("search-bar").classList.add("translate-y-1/2");
					document.getElementById("search-bar").classList.remove("bg-white/10");
					document.getElementById("search-bar").classList.add("bg-white/20");

					navItems.forEach(element => {
						element.classList.add("translate-y-1/4");
					});
				}
			}
		});
	}, []);

    return (
        <nav id="header" className="flex flex-row items-top justify-between w-full p-8 pt-4 pb-4 gap-8 fixed top-0 left-0 z-50">
            <h1 className={space_grotesk.className + " text-7xl"}>
                Jaki<span className={"a -ml-4 italic tracking-tighter text-white/50 inline-block"}>mixed</span>it
            </h1>
            <h1 className={space_grotesk.className + " text-xl transition-all nav-item"}>
                <Link href={ youtube } className="hover:text-red-600 transition-colors">youtube</Link>
            </h1>
            <h1 className={space_grotesk.className + " text-xl transition-all nav-item"}>
                <Link href={ soundcloud } className="hover:text-yellow-600 transition-colors">soundcloud</Link>
            </h1>
            <h1 className={space_grotesk.className + " text-xl transition-all nav-item"}>
                <Link href={ beatstars } className="hover:text-red-600 transition-colors">beatstars</Link>
            </h1>
            <div id="search-bar" className={space_grotesk.className + " flex justify-center items-center gap-4 rounded-full border border-white h-8 px-4 bg-white/10 text-white/25 hover:text-white backdrop-blur-3xl transition-all"} >Search for beats...<Image alt="Filter" className="p-1" src={filter}></Image></div>
        </nav>
    );
}