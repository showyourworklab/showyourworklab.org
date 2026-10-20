import RichText from "@/components/common/RichText";
import Button from "@/components/common/Button";
import Section from "@/components/common/Section";
import Icon from "@/components/common/Icon";

export default function Contact({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<Section
			id="contact"
			title={data?.title}
			lede={data?.lede}
			center={true}
			className="Contact"
		>
			<RichText
				data={data?.body}
				className="ContactBody"
			/>
			<Button
				size="large"
				outlined={true}
				href="mailto:info@showyourworklab.org"
				className="ContactButton"
				before={
					<Icon
						type="mail"
					/>
				}
				after={
					<Icon
						type="right"
					/>
				}
			>
				info@showyourworklab.org
			</Button>
		</Section>
	);
}