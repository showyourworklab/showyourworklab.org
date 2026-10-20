import { getLang } from "@/utils/selectors";
import Button from "@/components/common/Button";
import RichText from "@/components/common/RichText";
import Section from "@/components/common/Section";
import Icon from "@/components/common/Icon";

const PROJECTS = [
	{
		overline: "Announcement",
		title: "Currently running a pilot with VG, Adresseavisen, and Bergensavisen to bring verifiable C2PA into Norwegian journalism.",
		body: "Each newsroom will publish selected stories with provenance information for readers, putting the technology into practice and learning how audiences engage with it across national, regional, and local news."
	},
	// {
	// 	title: "Open Source Embeddable C2PA UI",
	// 	body: "",
	// }
];

export default function Announcement({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<Section
			className="AnnouncementSection"
		>
			<div
				className="AnnouncementItem"
			>
				<h2
					className="AnnouncementItemOverline"
				>
					{getLang(locale, "home", "announcement", "title")}
				</h2>
				<p
					className="AnnouncementItemTitle"
				>
					{data?.title}
				</p>
				<div
					className="AnnouncementItemBody"
				>
					<RichText
						data={data?.body}
					/>
				</div>
				<Button
					size="large"
					outlined={true}
					href={data?.url}
					after={
						<Icon
							type="external"
						/>
					}
					className="AnnouncementItemButton"
				>
					{data?.prompt}
				</Button>
			</div>
		</Section>
	);
}