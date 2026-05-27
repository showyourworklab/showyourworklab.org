"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import { HOME_SECTIONS_NAV } from "@/utils/constants";
import Button from "@/components/common/Button";

export default function Header() {
	const [belowHero, setBelowHero] = useState(false);

	useEffect(() => {
		const heroElem = document.getElementById("hero");
		const headerElem = document.getElementById("header");
		function handleScroll() {
			const scrollY = window.scrollY;
			const targetY = (heroElem?.clientHeight ?? 0) - (headerElem?.clientHeight ?? 0);
			setBelowHero(scrollY > targetY);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="header"
			className={cn(
				"Header",
				belowHero ? "Header_belowHero" : null
			)}
		>
			<div
				className={"HeaderInner"}
			>
				<Link
					href={`/`}
					className={"HeaderHome"}
				>
					<img
						src="/images/logo-light.svg"
						alt={`Logo for ${getLang("site", "title")}`}
						id="logo-lg"
						className={"HeaderLogo"}
					/>
					{/* <img
						src="/images/logo-sm-light.svg"
						alt="Logo for Show Your Work Lab"
						id="logo-sm"
						className={cn(
							"HeaderLogo",
							"HeaderLogo_sm",
						)}
					/> */}
				</Link>
				<nav
					className={"HeaderNav"}
				>
					<ul
						className={"HeaderNavItems"}
					>
						{HOME_SECTIONS_NAV.map((section: string, index: number) =>
							<li
								key={index}
								className={"HeaderNavItem"}
							>
								<Button
									href={`#${section}`}
									size={"small"}
									color="secondary"
									outlined={true}
									className={"HeaderNavItemButton"}
								>
									{getLang("home", section, "title")}
								</Button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}