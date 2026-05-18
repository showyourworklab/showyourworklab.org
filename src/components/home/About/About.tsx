import { getLang } from "@/utils/selectors"

export default function About() {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup>
					<h2
						className="HomeSectionTitle"
					>
						{getLang("home", "about", "title")}
					</h2>
					<p
						className="HomeSectionSubitle"
					>
						We create impactful <u>photojournalism</u>, image-driven <u>human rights campaigns</u>, and innovative <u>digital publishing tools</u>.
					</p>
				</hgroup>
				<p>
					The images we see online are increasingly difficult to trust and understand. Information about where, when, and how an image is made is often minimal, unverified, nonexistent, or intentionally misleading. The rise of synthetic AI images further amplifies this issue, sowing distrust and confusion in what we see online.
				</p>
				<p>
					We see a void in how the industry addresses this issue and believe a new standard for verifiable images online are urgently needed.
				</p>
				<p>
					The Show Your Work Lab helps fill this void. We partner with news organizations and human rights groups to define a new standard for verifiable images to increase transparency and foster trust with their audiences. We use verify-at-capture technology to produce original visual journalism covering critical stories and create innovative methods to ensure images are engaging, context-rich, and trustworthy. We prove what's real rather than identify what's fake.
				</p>
			</div>
			{/* // <AboutJournalism /> */}
			{/* // <AboutHumanRights /> */}
		</>
	);
}