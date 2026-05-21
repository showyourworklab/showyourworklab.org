import "syw-react/styles.css"
import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import { draftMode } from "next/headers";
import { HOME_SECTIONS } from "@/utils/constants";
import Hero from "@/components/site/Hero";
import About from "@/components/home/About";
import Code from "@/components/home/Code";
import Updates from "@/components/home/Updates";
import Press from "@/components/home/Press";
import Team from "@/components/home/Team/Team";

export default async function Home() {
	const payload = await getPayload({ config: await payloadConfig });
	const { isEnabled } = await draftMode();

	const home = await payload.findGlobal({
		slug: "home",
		draft: isEnabled,
	});

	const about = await payload.findGlobal({
		slug: "about",
		draft: isEnabled,
	});
	
	const code = await payload.findGlobal({
		slug: "code",
		draft: isEnabled,
	});

	const updates = await payload.findGlobal({
		slug: "updates",
		draft: isEnabled,
	});

	const press = await payload.findGlobal({
		slug: "press",
		draft: isEnabled,
	});

	const team = await payload.findGlobal({
		slug: "team",
		draft: isEnabled,
		depth: 1,
	});

	return (
		<div
			className={"Home"}
		>
			<Hero
				image={home?.hero}
			/>
			{HOME_SECTIONS.map((section: string, index: number) =>
				<section
					key={index}
					id={section}
					className="HomeSection"
				>
					{section === "about" ? <About data={about} /> : null}
					{section === "code" ? <Code data={code} /> : null}
					{section === "updates" ? <Updates data={updates} /> : null}
					{section === "press" ? <Press data={press} /> : null}
					{section === "team" ? <Team data={team} /> : null}
				</section>
			)}
		</div>
	);
};