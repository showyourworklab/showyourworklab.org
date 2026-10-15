"use client";
import RichText from "@/components/common/RichText";
import type { Upload } from "@payload-types";
import Figure from "@/components/common/Figure";
import { cn } from "@/utils/helpers";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { useParams } from "next/navigation";

export default function Hero({
	image,
	title,
	hideTitle,
	lede
} : {
	image?: Upload | number | null;
	title?: string;
	hideTitle?: boolean;
	lede?: SerializedEditorState | null;
}) {
	const { lang: locale } = useParams<{ lang: string }>();
	return (
		<section
			id="hero"
			className="Hero"
		>
			<Figure
				image={image}
				size="hero"
				priority
				fill
				className="HeroFigure"
			/>
			<div
				className="HeroInner"
			>
				{title ?
					<h1
						className={cn(
							"HeroTitle",
							hideTitle ? "HeroTitle_hide" : null
						)}
					>
						{title}
					</h1>
				: null}
				{lede ?
					<RichText
						data={lede}
						className="HeroLede"
					/>
				: null}
			</div>
		</section>
	);
}