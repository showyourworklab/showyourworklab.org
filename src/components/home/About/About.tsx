import { hasText } from "@payloadcms/richtext-lexical/shared";
import { getLang } from "@/utils/selectors"
import RichText from "@/components/common/RichText";
import { cn } from "@/utils/helpers";
import Figure from "@/components/common/Figure";

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
				<section
					key={index}
					className={cn(
						"HomeSectionInner",
						"HomeSectionSubsection"
					)}
				>
					<div
						className="HomeSectionSubsectionColumns"
					>
						<div
							className={cn(
								"HomeSectionSubsectionColumn",
								"HomeSectionSubsectionContent"
							)}
						>
							<h3
								className="HomeSectionSubsectionContentTitle"
							>
								{section?.title}
							</h3>
							<RichText
								data={section?.body}
								className="HomeSectionSubsectionContentBody"
							/>
						</div>
						<div
							className={cn(
								"HomeSectionSubsectionColumn",
								"HomeSectionSubsectionImage"
							)}
						>
							<Figure
								src={section?.image?.sizes?.large?.url}
								alt={section?.image?.alt}
								caption={section?.image?.caption}
								className="HomeSectionSubsectionImageFigure"
							/>
						</div>
					</div>
				</section>
			)}
		</>
	);
}