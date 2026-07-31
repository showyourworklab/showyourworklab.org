import { getLang } from "@/utils/selectors";
import { formatDate } from "@/utils/helpers";
import Button from "@/components/common/Button";
import RichText from "@/components/common/RichText";

export default function Updates({
	data,
	locale
} : {
	data: any;
	locale: string;
}) {
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
						{getLang(locale, "home", "updates", "title")}
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
				<div
					className="HomeSectionUpdatesItems"
				>
					{data?.items
						.sort((a: any, b: any) =>
							new Date(b.date).getTime() - new Date(a.date).getTime()
						)
						.map((item: any, index: number) =>
							<div
								key={index}
								className="UpdatesItem"
							>
								<h3
									className="UpdatesItemTitle"
								>
									{item.title}
								</h3>
								{/* <div
									className="UpdatesItemBlurb"
								>
									{item.blurb}
								</div> */}
								<div
									className="UpdatesItemFooter"
								>
									<div
										className="UpdatesItemDate"
									>
										{formatDate(locale, item.date)}
									</div>
									{item.url ?
										<Button
											href={item.url}
											target="_blank"
											rel="noreferrer nofollow"
											size="small"
											outlined={true}
											className="UpdatesItemPrompt"
										>
											{getLang(locale, "home", "updates", "prompt")}
										</Button>
									: null}
								</div>
							</div>
						)}
				</div>

				{/* <Carousel
					items={data?.items
						.sort((a: any, b: any) =>
							new Date(a.date).getUTCDate() - new Date(b.date).getUTCDate()
						)
						.map((item: any, index: number) => ({
							item,
							elem: (
								<div
									key={index}
									className="UpdatesItem"
								>
									<h3
										className="UpdatesItemTitle"
									>
										{item.title}
									</h3>
									<div
										className="UpdatesItemDate"
									>
										{formatDate(item.date)}
									</div>
									<div
										className="UpdatesItemBlurb"
									>
										{item.blurb}
									</div>
									{item.url ?
										<a
											href={item.url}
											target="_blank"
											rel="noreferrer nofollow"
											className="UpdatesItemPrompt"
										>
											Read more
										</a>
									: null}
								</div>
							)
						}))}
				/> */}
			</div>
		</>
	);
}