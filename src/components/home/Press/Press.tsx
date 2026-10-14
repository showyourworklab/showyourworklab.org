import { getLang } from "@/utils/selectors";
import { formatDate } from "@/utils/helpers";
import RichText from "@/components/common/RichText";
import Figure from "@/components/common/Figure";
import Carousel from "@/components/common/Carousel";
import CarouselItem from "@/components/common/Carousel/components/CarouselItem";

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
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup
					className="HomeSectionHeading"
				>
					<h2
						className="HomeSectionTitle"
					>
						{data?.title}
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
							<a
								href={item.url}
								target="_blank"
								rel="noreferrer nofollow"
								className="PressItemLink"
							>
								{item?.image?.sizes?.small?.url ?
									<Figure
										src={item?.image?.sizes?.small?.url}
										alt={item?.image?.alt}
										caption={item?.image?.caption}
										className="PressItemFigure"
									/>
								: null}
								<div
									className="PressItemContent"
								>
									<div
										className="PressItemSource"
									>
										{item.source}
									</div>
									<h3
										className="PressItemTitle"
									>
										"{item.title}""
									</h3>
									<div
										className="PressItemDate"
									>
										{formatDate(locale, item.date)}
									</div>
								</div>
							</a>
						</CarouselItem>
					)}
				</Carousel>
			</div>
		</>
	);
}