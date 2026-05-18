"use client";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import { EMAIL, GITHUB, HOME_SECTIONS, SOCIALS } from "@/utils/constants";
import Button from "@/components/common/Button";

export default function Footer() {
	return (
		<footer
			id="footer"
			className="Footer"
		>
			<div
				className={cn(
					"Inner",
					"FooterInner"
				)}
			>
				<div
					className="FooterBranding"
				>
					<a
						href="#home"
					>
						<span
							className="FooterBrandingTitle"
						>
							{getLang("site", "title")}
						</span>
						<img
							src="/images/logo-light.svg"
							alt={`Logo for ${getLang("site", "title")}`}
							id="logo-lg"
							className={cn(
								"FooterBrandingImage"
							)}
						/>
					</a>
				</div>
				<div
					className="FooterColumns"
				>
					<div
						className="FooterColumn"
					>
						<nav
							className="FooterNav"
						>
							<ul
								className="FooterNavItems"
							>
								{HOME_SECTIONS.map((section: string, index: number) =>
									<li
										key={index}
										className="FooterNavItem"
									>
										<Button
											href={`#${section}`}
											// small={true}
											// outlined={true}
											className="FooterNavItemButton"
										>
											{getLang("home", section, "title")}
										</Button>
									</li>
								)}
							</ul>
						</nav>
					</div>
					<div
						className="FooterColumn"
					>
						<div
							className="FooterSocials"
						>
							<ul
								className="FooterSocialsItems"
							>
								{SOCIALS.map((social: string, index: number) =>
									<li
										key={index}
										className="FooterSocialsItem"
									>
										<Button
											href={getLang("social", social, "url")}
											target="_blank"
											rel="noreferrer nofollow"
											className="FooterSocialsItemButton"
										>
											{getLang("social", social, "title")}
										</Button>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}