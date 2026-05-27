import { getLang } from "@/utils/selectors"
import RichText from "@/components/common/RichText";
import Button from "@/components/common/Button";

export default function Contact({
	data
} : {
	data: any
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
					{getLang("home", "contact", "title")}
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
			<Button
				size="large"
				outlined={true}
				href="mailto:info@showyourworklab.org"
				className="ContactButton"
			>
				info@showyourworklab.org
			</Button>
		</div>
	);
}