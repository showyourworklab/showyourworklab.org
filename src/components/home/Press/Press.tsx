import { getLang } from "@/utils/selectors";
import { formatDate } from "@/utils/helpers";
import { PRESS_ITEMS } from "./utils/constants";

export default function Press() {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup>
					<h2
						className="HomeSectionTitle"
					>
						{getLang("home", "press", "title")}
					</h2>
				</hgroup>
				<ul
					className="PressItems"
				>
					{PRESS_ITEMS.map((item: any, index: number) =>
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