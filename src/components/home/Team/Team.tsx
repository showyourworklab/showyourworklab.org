import { getLang } from "@/utils/selectors";
import RichText from "@/components/common/RichText";
import Figure from "@/components/common/Figure";
import { Collapsible } from "@ark-ui/react";
import Icon from "@/components/common/Icon";

export default function Team({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup>
					<h2
						className="HomeSectionTitle"
					>
						{getLang(locale, "home", "team", "title")}
					</h2>
					<RichText
						data={data?.lede}
						className="HomeSectionLede"
					/>
				</hgroup>
				<RichText
					data={data?.body}
					className="HomeSectionBody"
				/>
				{data?.items ?
					<div
						className="TeamItems"
					>
						{data?.items.map((item: any, index: number) =>
							<div
								key={index}
								className="TeamItem"
							>
								{item?.image?.sizes?.small?.url ?
									<Figure
										src={item?.image?.sizes?.small?.url}
										alt={item?.image?.alt}
										caption={item?.image?.caption}
										className="TeamItemFigure"
									/>
								: null}
								<div
									className="TeamItemContent"
								>
									<div
										className="TeamItemHeading"
									>
										<h3
											className="TeamItemName"
										>
											{item?.name}
										</h3>
										<div
											className="TeamItemWebsite"
										>
											<a
												href={item?.url}
												target="_blank"
												rel="noreferrer nofollow"
											>
												{item?.url?.replace("https://", "")}
											</a>
										</div>
									</div>
									<div
										className="TeamItemRole"
									>
										{item?.role}
									</div>
									<Collapsible.Root
										className="TeamItemCollapsible"
										collapsedHeight="200px"
									>
										<Collapsible.Trigger
											className="TeamItemCollapsibleTrigger"
										>
											<div>
												<Icon
													type="down"
												/>
											</div>
										</Collapsible.Trigger>
										<Collapsible.Content
											className="TeamItemCollapsibleContent"
										>
											<div
												className="TeamItemBio"
											>
												<RichText
													data={item?.body}
												/>
											</div>
										</Collapsible.Content>
									</Collapsible.Root>
								</div>
							</div>
						)}
					</div>
				: null}
			</div>
		</>
	);
}