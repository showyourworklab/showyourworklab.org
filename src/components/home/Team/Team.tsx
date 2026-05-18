import { getLang } from "@/utils/selectors";
import { TEAM_ITEMS } from "./utils/constants";
import Markdown from "@/components/common/Markdown/Markdown";

export default function Team() {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup>
					<h2
						className="HomeSectionTitle"
					>
						{getLang("home", "team", "title")}
					</h2>
				</hgroup>
				<ul
					className="TeamItems"
				>
					{TEAM_ITEMS.map((item: any, index: number) =>
						<li
							key={index}
							className="TeamItem"
						>
							<img
								src={`/images/team/${item.slug}.jpg`}
								alt={`Portrait of ${item.name}`}
								// caption="Photo by Roshni Khatri"
							/>
							<hgroup
								className="TeamItemHeading"
							>
								<h3
									className="TeamItemName"
								>
									{item.name}
								</h3>
								<div
									className="TeamItemWebsite"
								>
									<a
										href={item.website}
										target="_blank"
										rel="noreferrer nofollow"
									>
										{item.website.replace("https://", "")}
									</a>
								</div>
							</hgroup>
							<div
								className="TeamItemRole"
							>
								{item.role}
							</div>
							<div
								className="TeamItemBio"
							>
								<Markdown>
									{item.bio}
								</Markdown>
							</div>
						</li>
					)}
				</ul>
			</div>
		</>
	);
}