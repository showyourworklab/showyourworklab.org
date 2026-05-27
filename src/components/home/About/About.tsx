import { hasText } from "@payloadcms/richtext-lexical/shared";
import { getLang } from "@/utils/selectors"
import RichText from "@/components/common/RichText";
import { cn } from "@/utils/helpers";
import Figure from "@/components/common/Figure";

export default function About({
	data
} : {
	data: any
}) {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup
					className="HomeSectionHeading"
				>
					<h2
						className="HomeSectionTitle"
					>
						{getLang("home", "about", "title")}
					</h2>
					{data?.lede ?
						<RichText
							data={data?.lede}
							className="HomeSectionLede"
						/>
					: null}
				</hgroup>
				{hasText(data?.body) ?
					<RichText
						data={data?.body}
						className="HomeSectionBody"
					/>
				: null}
			</div>
			<div>
				{data?.sections.map((section: any, index: number) =>
					<div
						key={index}
						className="HomeSectionSubsection"
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
				)}
			</div>
		</>
	);
}