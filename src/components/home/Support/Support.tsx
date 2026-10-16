import RichText from "@/components/common/RichText";
import Section from "@/components/common/Section";

export default function Support({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<Section
			id="support"
			title={data?.title}
			lede={data?.lede}
			center={true}
			className="SupportSection"
		>
			<RichText
				data={data?.body}
				className="SupportBody"
			/>
			<div
				className="SupportSubsections"
			>
				{data.groups.map((group: any, index: number) =>
					<div
						key={index}
						className="SupportSubection"
					>
						{group.title ?
							<h3
								className="SupportSubectionTitle"
							>
								{group.title}
							</h3>
						: null}
						{group.items?.length ?
							<ul
								className="SupportSubectionList"
							>
								{group.items.map((item: any, index: number) =>
									<li
										key={index}
										className="SupportSubectionListItem"
									>
										<a
											href={item?.url}
											target="_blank"
										>
											{item?.image?.url ?
												<img
													src={item?.image?.url}
													alt={item?.image?.alt}
													className="SupportSubectionListItemImage"
												/>
											: null}
											<span>
												{item?.title}
											</span>
										</a>
									</li>
								)}
							</ul>
						: null}
					</div>
				)}
			</div>
		</Section>
	);
}