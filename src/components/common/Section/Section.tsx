import { AllHTMLAttributes } from "react";
import { cn } from "@/utils/helpers";
import RichText from "../RichText";

export interface SectionProps extends Omit<AllHTMLAttributes<HTMLElement>, "size"> {
	title?: string;
	lede?: any;
	body?: any
	center?: boolean;
};

export default function Section({
	title,
	lede,
	body,
	center,
	children,
	className,
	...props
} : SectionProps) {
	return (
		<section
			className={cn(
				"Section",
				center ? "Section_center" : null,
				className
			)}
			{...props}
		>
			<div
				className="SectionInner"
			>
				{title || lede ?
					<hgroup
						className="SectionHeading"
					>
						{title ?
							<div
								className="SectionTab"
							>
								<h2
									className="SectionTitle"
								>
									{title}
								</h2>
							</div>
						: null}
						{lede ?
							<RichText
								data={lede}
								className="SectionLede"
							/>
						: null}
					</hgroup>
				: null}
				<div
					className="SectionContent"
				>
					{body ?
						<RichText
							data={body}
							className="SectionBody"
						/>
					: null}
					{children}
				</div>
			</div>
		</section>
	);
};