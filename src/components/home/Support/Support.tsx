import { getLang } from "@/utils/selectors";
import RichText from "@/components/common/RichText";

export default function Support({
	data
} : {
	data: any
}) {
	return (
		<div
			className="HomeSectionInner"
		>
			<hgroup>
				<h2
					className="HomeSectionTitle"
				>
					{getLang("home", "support", "title")}
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
			<div
				className="Support"
			>
				{data.groups.map((group: any, index: number) =>
					<div
						key={index}
						className="SupportSection"
					>
						{group.title ?
							<h3
								className="SupportSectionTitle"
							>
								{group.title}
							</h3>
						: null}
						{group.items?.length ?
							<ul
								className="SupportSectionList"
							>
								{group.items.map((item: any, index: number) =>
									<li
										key={index}
										className="SupportSectionListItem"
									>
										<a
											href={item?.url}
											target="_blank"
										>
											<img
												src={item?.image?.url}
												alt={item?.image?.alt}
												className="SupportSectionListItemImage"
											/>
										</a>
									</li>
								)}
							</ul>
						: null}
					</div>
				)}
			</div>
		</div>
	);
}