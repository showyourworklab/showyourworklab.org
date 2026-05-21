import { getLang } from "@/utils/selectors"
import RichText from "@/components/common/RichText";

export default function Code({
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
					{getLang("home", "code", "title")}
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
		</div>
	);
}