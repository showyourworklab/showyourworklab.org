import { HTMLProps, ReactNode } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { cn } from "@/utils/helpers";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export interface CarouselProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
	items: any[];
};

export default function Carousel({
	items,
	className,
	children,
	...props
} : CarouselProps) {
	
	return (
		<ArkCarousel.Root
			slideCount={items.length}
			slidesPerPage={2}
			spacing="2rem"
			className={cn(
				"CarouselRoot",
				className
			)}
			{...props}
		>
			<ArkCarousel.ItemGroup
				className={"CarouselItemGroup"}
			>
				{items.map((item, index) => (
					<ArkCarousel.Item
						key={index}
						index={index}
						className={"CarouselItem"}
					>
						{item.elem}
					</ArkCarousel.Item>
				))}
			</ArkCarousel.ItemGroup>
			<ArkCarousel.Control
				className={"CarouselControl"}
			>
				<ArkCarousel.PrevTrigger
					className={"CarouselTrigger"}
				>
					<ArrowLeftIcon />
				</ArkCarousel.PrevTrigger>
				<ArkCarousel.IndicatorGroup
					className={"CarouselIndicatorGroup"}
				>
					{items.map((_, index) => (
						<ArkCarousel.Indicator
							key={index}
							index={index}
							className={"CarouselIndicator"}
						/>
					))}
				</ArkCarousel.IndicatorGroup>
				<ArkCarousel.NextTrigger
					className={"CarouselTrigger"}
				>
					<ArrowRightIcon />
				</ArkCarousel.NextTrigger>
			</ArkCarousel.Control>
		</ArkCarousel.Root>
	)
};