import { formatDate } from "@/utils/helpers";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import Carousel, { CarouselItem } from "@/components/common/Carousel";

export default function Press({
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
			id="press"
			title={data?.title}
			lede={data?.lede}
			body={data?.body}
			className="PressSection"
		>
			<Carousel
				slideCount={data?.items.length}
				fullWidth={true}
				className="PressCarousel"
			>
				{sortedItems.map((item: any, index: number) =>
					<CarouselItem
						key={index}
						index={index}
						className="PressItem"
					>
						<Card
							image={item?.image}
							title={`"${item?.title}"`}
							overline={item.source}
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