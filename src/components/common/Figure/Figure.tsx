import { HTMLProps } from "react";
import Image from "next/image";
import type { Upload } from "@payload-types";
import { cn } from "@/utils/helpers";
import { IMAGE_SIZES, type ImageSize } from "@/utils/constants";

export interface FigureProps extends Omit<HTMLProps<HTMLDivElement>, "size"> {
	image?: Upload | number | null;
	size?: ImageSize;
	priority?: boolean;
	fill?: boolean;
};

export default function Figure({
	image,
	size = "full",
	priority = false,
	fill = false,
	children,
	className,
	...props
} : FigureProps) {
	if (!image || typeof image === "number" || !image.filename) return null;

	return (
		<figure
			className={cn(
				"Figure",
				className
			)}
			{...props}
		>
			<Image
				src={`/uploads/${image.filename}`}
				alt={image.alt ?? ""}
				sizes={IMAGE_SIZES[size]}
				{...(fill
					? { fill: true }
					: { width: image.width ?? 0, height: image.height ?? 0 }
				)}
				quality={90}
				loading={priority ? "eager" : "lazy"}
				fetchPriority={priority ? "high" : "auto"}
				unoptimized={image.mimeType === "image/svg+xml"}
			/>
			{image.caption ?
				<figcaption
					className="FigureCaption"
				>
					{image.caption}
				</figcaption>
			: null}
			{children}
		</figure>
	);
}
