import { AllHTMLAttributes, ReactNode } from "react";
import { Upload } from "@payload-types";
import { cn } from "@/utils/helpers";
import Figure from "../Figure";

export interface CardProps extends Omit<AllHTMLAttributes<HTMLElement>, "size"> {
	title?: string;
	image?: Upload;
	overline?: string | ReactNode;
	footer?: string | ReactNode;
	href?: string;
};

export default function Card({
	title,
	image,
	overline,
	footer,
	href,
	children,
	className,
	...props
} : CardProps) {
	const ComponentTag = href ? "a" : "div";
	return (
		<ComponentTag
			className={cn(
				"Card",
				className
			)}
			{...(href ? { href } : {})}
			{...props}
		>
			<Figure
				// size="grid"
				size="card"
				image={image}
				className="CardFigure"
			/>
			<div
				className="CardInner"
			>
				{overline || title ?
					<div
						className="CardHeading"
					>
						{overline ?
							<div
								className="CardOverline"
							>
								{overline}
							</div>
						: null}
						{title ?
							<div
								className="CardTab"
							>
								<h3
									className="CardTitle"
								>
									{title}
								</h3>
							</div>
						: null}
					</div>
				: null}
				<div
					className="CardBody"
				>
					{children}
				</div>
				<div
					className="CardFooter"
				>
					{footer}
				</div>
			</div>
		</ComponentTag>
	);
};