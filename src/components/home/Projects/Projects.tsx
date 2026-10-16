import Button from "@/components/common/Button";
import RichText from "@/components/common/RichText";

const PROJECTS = [
	{
		title: "Norwegian Media Provenance Pilot",
		body: "",
	},
	{
		title: "Open Source Embeddable C2PA UI",
		body: "",
	}
];

export default function Projects({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<div
			className="HomeSectionInner"
		>
			<hgroup
				className="HomeSectionHeading"
			>
				<h2
					className="HomeSectionTitle"
				>
					{/* {data?.title} */}
					Our projects
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
				className="ProjectsItems"
			>
				{PROJECTS.map((section: any, index: number) =>
					<section
						className="ProjectsItem"
					>
						<h3
							className="ProjectsItemTitle"
						>
							{section?.title}
						</h3>
						<Button
							size="large"
							outlined={true}
							href="#"
							className="ProjectsItemButton"
						>
							Read more
						</Button>
					</section>
				)}
			</div>
		</div>
	);
}