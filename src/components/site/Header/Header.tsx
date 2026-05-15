"use client";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";

export default function Header() {
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
				<ul
					className={"HeaderNav"}
				>
					
				</ul>
			</div>
		</header>
	);
}