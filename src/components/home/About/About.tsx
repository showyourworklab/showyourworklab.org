import { cn } from "@/utils/helpers";
import Figure from "@/components/common/Figure";
import Section from "@/components/common/Section";
import RichText from "@/components/common/RichText";

export default function About({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<>
			{data?.sections.map((section: any, index: number) =>
				<Section
					key={index}
					// title={section?.title}
					className="AboutSection"
				>
					<div
						className="AboutSectionColumns"
					>
						<div
							className={cn(
								"AboutSectionColumn",
								"AboutSectionText"
							)}
						>
							<div
								className="AboutSectionTextInner"
							>
								<h3
									className="AboutSectionTextTitle"
								>
									{section?.title}
								</h3>
								<RichText
									data={section?.body}
									className="AboutSectionTextBody"
								/>
							</div>
						</div>
						<div
							className={cn(
								"AboutSectionColumn",
								"AboutSectionImage"
							)}
						>
							<Figure
								image={section?.image}
								size="half"
								className="AboutSectionImageFigure"
							/>
						</div>
					</div>
				</Section>
			)}
		</>
	);
}