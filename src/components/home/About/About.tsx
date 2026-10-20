import { cn } from "@/utils/helpers";
import Figure from "@/components/common/Figure";
import Section from "@/components/common/Section";
import RichText from "@/components/common/RichText";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";

export default function About({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<>
			<span id="about"></span>
			{data?.sections.map((section: any, index: number) =>
				<Section
					key={index}
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
								{section?.url && section?.prompt ?
									<Button
										href={section.url}
										target="_blank"
										size="large"
										outlined={true}
										before={
											<Icon
												type="mail"
											/>
										}
										after={
											<Icon
												type="right"
											/>
										}
										className="AboutSectionTexButton"
									>
										{section.prompt}
									</Button>
								: null}
								{/* {section?.items?.map((item: any, index: number) =>
									<div
										className="AboutSectionCallout"
									>
										{item.title}&nbsp;
										{item.url && item.prompt ?
											<a
												href={item.url}
												target="_blank"
											>
												{item.prompt}
											</a>
										: null}
									</div>
								)} */}
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