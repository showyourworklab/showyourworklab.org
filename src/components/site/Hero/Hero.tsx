"use client";
import { getLang } from "@/utils/selectors";

export default function Hero({
	image
} : {
	image: any
}) {
	return (
		<section
			id="hero"
			className="Hero"
			style={{
				backgroundImage: `url(${image?.url})`
			}}
		>
			<div
				className="HeroInner"
			>
				<h1
					className="HeroTitle"
				>
					<span>Show Your Work</span> <span>Lab</span>
				</h1>
				<div
					className="HeroTagline"
				>
					{getLang("site", "tagline")}
				</div>
			</div>
		</section>
	);
}