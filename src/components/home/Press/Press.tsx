import { getLang } from "@/utils/selectors";
import { formatDate } from "@/utils/helpers";
import RichText from "@/components/common/RichText";

export default function Press({
	data
} : {
	data: any;
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
						{getLang("home", "press", "title")}
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
				<ul
					className="PressItems"
				>
					{data?.items
						.sort((a: any, b: any) =>
							new Date(b.date).getTime() - new Date(a.date).getTime()
						)
						.map((item: any, index: number) =>
							<li
								key={index}
								className="PressItem"
							>
								<div
									className="PressItemSource"
								>
									{item.source}
								</div>
								<h3
									className="PressItemTitle"
								>
									<a
										href={item.url}
										target="_blank"
										rel="noreferrer nofollow"
									>
										{item.title}
									</a>
								</h3>
								<div
									className="PressItemDate"
								>
									{formatDate(item.date)}
								</div>
							</li>
					)}
				</ul>
			</div>
		</>
	);
}