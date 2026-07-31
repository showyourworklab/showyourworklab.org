"use client";
import { useParams } from "next/navigation";
import { getLang } from "@/utils/selectors";

export default function Hero({
	image
} : {
	image: any;
}) {
	const { lang: locale } = useParams<{ lang: string }>();
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
					{getLang(locale, "site", "tagline")}
				</div>
			</div>
		</section>
	);
}