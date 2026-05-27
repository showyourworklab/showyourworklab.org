import { HTMLProps } from "react";
import { cn } from "@/utils/helpers";

export interface FigureProps extends HTMLProps<HTMLDivElement> {
	src: string;
	alt: string;
	caption?: string;
};

export default function Figure({
	src,
	alt,
	caption,
	children,
	className,
	...props
} : FigureProps) {

	return (
		<figure
			className={cn(
				"Figure",
				className
			)}
			{...props}
		>
			<img
				src={src}
				alt={alt}
			/>
			{caption ?
				<figcaption
					className="FigureCaption"
				>
					{caption}
				</figcaption>
			: null}
		</figure>
	);
}
