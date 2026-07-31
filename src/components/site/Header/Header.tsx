"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn, getLocaleHref } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import { HOME_SECTIONS_NAV, LOCALES } from "@/utils/constants";
import Button from "@/components/common/Button";

export default function Header() {
	const { lang: locale } = useParams<{ lang: string }>();
	const [belowHero, setBelowHero] = useState(false);
	const pathname = usePathname();

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
				className="HeaderInner"
			>
				<div
					className="HeaderHome"
				>
					<Link
						href={`/${locale}`}
					>
						<img
							src="/images/logo-light.svg"
							alt={`Logo for ${getLang(locale, "site", "title")}`}
							id="logo-lg"
							className="HeaderHomeLogo"
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
				</div>
				<nav
					className="HeaderNav"
				>
					<ul
						className="HeaderNavItems"
					>
						{HOME_SECTIONS_NAV.map((section: string, index: number) =>
							<li
								key={index}
								className="HeaderNavItem"
							>
								<Button
									href={`#${section}`}
									size="small"
									color="secondary"
									outlined={true}
									className="HeaderNavItemButton"
								>
									{getLang(locale, "home", section, "title")}
								</Button>
							</li>
						)}
					</ul>
				</nav>
				<div
					className="HeaderLocale"
				>
					<nav
						className="HeaderLocaleNav"
						aria-label={getLang(locale, "locale", "switch")}
					>
						<ul
							className="HeaderLocaleItems"
						>
							{LOCALES.map((l: string) =>
								<li
									key={l}
									className="HeaderLocaleItem"
								>
									<Link
										href={getLocaleHref(pathname, l)}
										aria-current={l === locale ? "true" : undefined}
										className={cn(
											"HeaderLocaleItemLink",
											l === locale ? "HeaderLocaleItemLink_active" : null
										)}
									>
										{getLang(locale, "locale", l)}
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}