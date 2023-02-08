import Image from "next/image";
import Link from "next/link";

import SearchPane from "@/components/SearchPane/SearchPane";

import { youtube, soundcloud, beatstars, server } from "@/config";

import filter from "@/public/filter.svg";

import { useEffect, useState } from "react";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Navbar(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function addNavStyle() {
		if (typeof window !== "undefined") {
			const navItems = Array.from(document.getElementsByClassName("nav-item"));

				document.getElementById("header").classList.add("border-b", "border-black", "bg-black/25", "backdrop-blur-xl");
			document.getElementById("search-bar").classList.add("translate-y-1/2");
			document.getElementById("search-bar").classList.remove("bg-white/10");
			document.getElementById("search-bar").classList.add("bg-white/20");

			navItems.forEach(element => {
				element.classList.add("translate-y-1/4");
			});
		}
	}

	function removeNavStyle() {
		if (typeof window !== "undefined") {
			const navItems = Array.from(document.getElementsByClassName("nav-item"));

			document.getElementById("header").classList.remove("border-b", "border-black", "bg-black/25", "backdrop-blur-xl");
			document.getElementById("search-bar").classList.remove("translate-y-1/2", "bg-white/20");
			document.getElementById("search-bar").classList.add("bg-white/10");

			navItems.forEach(element => {
				element.classList.remove("translate-y-1/4");
			});
		}
	}

	function openSearchPane() {
		setIsNavOpen(true);

		addNavStyle();

		document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
		document.getElementsByTagName("html")[0].classList.remove("overflow-auto");

		document.getElementById("search-plane").classList.remove("translate-x-full");
		document.getElementById("search-bar").classList.remove("w-56");
		document.getElementById("search-bar").classList.add("w-96");
	}

	function closeSearchPane() {
		setIsNavOpen(false);

		document.getElementsByTagName("html")[0].classList.remove("overflow-hidden");
		document.getElementsByTagName("html")[0].classList.add("overflow-auto");

		document.getElementById("search-plane").classList.add("translate-x-full");
		document.getElementById("search-bar").classList.add("w-56");
		document.getElementById("search-bar").classList.remove("w-96");
	}

	
	// initial
    useEffect(() => {
		const navItems = Array.from(document.getElementsByClassName("nav-item"));

		window.addEventListener("scroll", _ => {
			if(document.getElementsByTagName("main")[0].getBoundingClientRect().top >= -2) {
				removeNavStyle();
			} else {
				addNavStyle();
			}
		});

		let lasting = false;
		document.getElementById("search-bar").addEventListener("mouseover", _ => {
			if (!lasting) {
				openSearchPane();
			}
		});

		document.getElementById("search-bar").addEventListener("mouseleave", _ => {
			if (!lasting) {
				closeSearchPane();
			}
		});

		document.getElementById("search-bar").addEventListener("mousedown", _ => {
			lasting = true;
			openSearchPane();
		});
	});

	
	useEffect(() => {
		document.getElementById("search-bar-action-icon").src = server + "/" + (isNavOpen ? "close.svg" : "filter.svg");
	}, [isNavOpen])


    return (
		<>
			<SearchPane />
			<nav id="header" className={"flex flex-row items-top justify-between w-full px-8 pt-4 pb-4 gap-8 fixed top-0 left-0 z-40 " + props.className}>
				<Link href={ server + "/" }>
					<h1 className="font-spaceGrotesk text-7xl">
						Jaki<span className={"-ml-4 italic tracking-tighter text-white/50 inline-block"}>mixed</span>it
					</h1>
				</Link>
				<h1 className="font-spaceGrotesk text-xl transition-all nav-item">
					<Link href={ youtube } className="hover:text-red-600 transition-colors">youtube</Link>
				</h1>
				<h1 className="font-spaceGrotesk text-xl transition-all nav-item">
					<Link href={ soundcloud } className="hover:text-yellow-600 transition-colors">soundcloud</Link>
				</h1>
				<h1 className="font-spaceGrotesk text-xl transition-all nav-item">
					<Link href={ beatstars } className="hover:text-red-600 transition-colors">beatstars</Link>
				</h1>
				<div id="search-bar" className="font-spaceGrotesk flex justify-center right-0 items-center pr-4 rounded-full border border-white h-8 bg-white/10 backdrop-blur-3xl transition-all z-50 w-56">
					<input type="text" id="search-input" name="search-input" placeholder="Search for beats..." className="bg-transparent active:text-white text-white/25 hover:text-white focus:text-white px-4 rounded-l-full h-8 transition-colors w-full" />
					<button onClick={closeSearchPane}>
						<Image id="search-bar-action-icon" alt="Filter" className="p-1" src={ filter } />
					</button>
				</div>
			</nav>
		</>
    );
}