import "syw-react/styles.css"
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import { HOME_SECTIONS } from "@/utils/constants";
import Hero from "@/components/site/Hero";
import About from "@/components/home/About";
import Updates from "@/components/home/Updates";
import Press from "@/components/home/Press";
import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import Support from "@/components/home/Support";

export default async function Home({
	params
} : {
	params: Promise<{ lang: string }>;
}) {
	const { lang: locale } = await params;
	const payload = await getPayload({
		config: await payloadConfig
	});
	const { isEnabled } = await draftMode();

	const data = (await Promise.all(
		["home", ...HOME_SECTIONS].map((section: string) =>
			payload.findGlobal({
				slug: section,
				draft: isEnabled,
				locale: locale,
			})
		)
	)).reduce((obj, promise) => ({
		...obj,
		[promise.globalType]: promise
	}), {});

	return (
		<div
			className={"Home"}
		>
			<Hero
				image={data?.home?.hero}
			/>
			<div>
				{HOME_SECTIONS.map((section: string, index: number) =>
					<section
						key={index}
						id={section}
						className="HomeSection"
					>
						{section === "about" ? <About data={data?.about} locale={locale} /> : null}
						{section === "updates" ? <Updates data={data?.updates} locale={locale} /> : null}
						{section === "team" ? <Team data={data?.team} locale={locale} /> : null}
						{section === "press" ? <Press data={data?.press} locale={locale} /> : null}
						{section === "contact" ? <Contact data={data?.contact} locale={locale} /> : null}
						{section === "support" ? <Support data={data?.support} locale={locale} /> : null}
					</section>
				)}
			</div>
		</div>
	);
};