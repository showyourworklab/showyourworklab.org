"use client";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import { HOME_SECTIONS } from "@/utils/constants";
import Button from "@/components/common/Button";
import { useEffect } from "react";

export default function Header() {

	useEffect(() => {
		const heroElem = document.querySelector("#hero");
		function handleScroll(event: Event) {
			console.log(window.scrollY)
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="header"
			className={"Header"}
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
						className={cn(
							"HeaderLogo"
						)}
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
						{HOME_SECTIONS.map((section: string, index: number) =>
							<li
								key={index}
								className={"HeaderNavItem"}
							>
								<Button
									href={`#${section}`}
									small={true}
									outlined={true}
									color="secondary"
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