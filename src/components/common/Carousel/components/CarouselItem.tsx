import { HTMLProps } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { cn } from "@/utils/helpers";

export interface CarouselItemProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
	index: number;
};

export default function CarouselItem({
	index,
	className,
	children,
	...props
} : CarouselItemProps) {
	
	return (
		<ArkCarousel.Item
			index={index}
			className={cn(
				"CarouselItem",
				className
			)}
			{...props}
		>
			{children}
		</ArkCarousel.Item>
	)
};