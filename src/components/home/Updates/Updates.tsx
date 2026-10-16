import { formatDate } from "@/utils/helpers";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import Carousel, { CarouselItem } from "@/components/common/Carousel";

export default function Updates({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
	const sortedItems = data?.items
		.sort((a: any, b: any) =>
			new Date(b.date).getTime() - new Date(a.date).getTime()
		);

	return (
		<Section
			title={data?.title}
			lede={data?.lede}
			body={data?.body}
			className="UpdatesSection"
		>
			<Carousel
				slideCount={data?.items.length}
				fullWidth={true}
				className="UpdatesCarousel"
			>
				{sortedItems.map((item: any, index: number) =>
					<CarouselItem
						key={index}
						index={index}
						className="UpdatesItem"
					>
						<Card
							image={item?.image}
							title={item?.title}
							overline={item.overline}
							footer={formatDate(locale, item.date)}
							href={item.url}
							target="_blank"
							rel="noreferrer nofollow"
							className="PressItemCard"
						/>
					</CarouselItem>
				)}
			</Carousel>
		</Section>
	);
}