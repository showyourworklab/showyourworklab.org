import { HTMLProps } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { cn } from "@/utils/helpers";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export interface CarouselProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
	slideCount: number;
	slidesPerPage?: number;
	fullWidth?: boolean;
};

export default function Carousel({
	slideCount = 0,
	slidesPerPage = 4,
	fullWidth,
	className,
	children,
	...props
} : CarouselProps) {
	
	return (
		<ArkCarousel.Root
			autoSize={true}
			slideCount={slideCount}
			allowMouseDrag={true}
			snapType="proximity"
			spacing="2rem"
			padding="var(--carousel-padding)"
			className={cn(
				"CarouselRoot",
				fullWidth ? "CarouselRoot_fullWidth" : null,
				className
			)}
			{...props}
		>
			<ArkCarousel.ItemGroup
				className={"CarouselItemGroup"}
			>
				{children}
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
					{Array.from({ length: slideCount }).map((_, index) => (
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