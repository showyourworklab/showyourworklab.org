import { getLang } from "@/utils/selectors";
import RichText from "@/components/common/RichText";
import Figure from "@/components/common/Figure";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

export default function Team({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	return (
		<Section
			title={data?.title}
			lede={data?.lede}
			body={data?.body}
			className="TeamSection"
		>
			{data?.items ?
				<div
					className="TeamItems"
				>
					{data?.items.map((item: any, index: number) =>
						<Card
							key={index}
							image={item?.image}
							className="TeamItem"
						>
							<div
								className="TeamItemHeading"
							>
								<h3
									className="TeamItemName"
								>
									{item?.name}
								</h3>
								<div
									className="TeamItemWebsite"
								>
									<a
										href={item?.url}
										target="_blank"
										rel="noreferrer nofollow"
									>
										{item?.url?.replace("https://", "")}
									</a>
								</div>
							</div>
							<div
								className="TeamItemRole"
							>
								{item?.role}
							</div>
							<div
								className="TeamItemBio"
							>
								<RichText
									data={item?.body}
								/>
							</div>
						</Card>
					)}
				</div>
			: null}
		</Section>
	);
}