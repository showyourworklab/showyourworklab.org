"use client";
import Link from "next/link";
import { cn } from "@/utils/helpers";
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
				// backgroundImage: `url(${image?.sizes?.large?.url})`
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
					We prove what's real rather than identify what's fake
				</div>
			</div>
		</section>
	);
}