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
					{data?.lede ?
						<RichText
							data={data?.lede}
							className="HomeSectionLede"
						/>
					: null}
				</hgroup>
				{data?.body ?
					<RichText
						data={data?.body}
						className="HomeSectionBody"
					/>
				: null}
				<ul
					className="PressItems"
				>
					{data?.items.map((item: any, index: number) =>
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