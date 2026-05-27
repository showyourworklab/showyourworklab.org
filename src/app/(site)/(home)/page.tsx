import "syw-react/styles.css"
import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import { draftMode } from "next/headers";
import { HOME_SECTIONS } from "@/utils/constants";
import Hero from "@/components/site/Hero";
import About from "@/components/home/About";
import Updates from "@/components/home/Updates";
import Press from "@/components/home/Press";
import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import Support from "@/components/home/Support";

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

	const updates = await payload.findGlobal({
		slug: "updates",
		draft: isEnabled,
	});

	const team = await payload.findGlobal({
		slug: "team",
		draft: isEnabled,
		depth: 1,
	});

	const press = await payload.findGlobal({
		slug: "press",
		draft: isEnabled,
	});

	const contact = await payload.findGlobal({
		slug: "contact",
		draft: isEnabled,
	});

	const support = await payload.findGlobal({
		slug: "support",
		draft: isEnabled,
	});

	return (
		<div
			className={"Home"}
		>
			<Hero
				image={home?.hero}
			/>
			<div>
				{HOME_SECTIONS.map((section: string, index: number) =>
					<section
						key={index}
						id={section}
						className="HomeSection"
					>
						{section === "about" ? <About data={about} /> : null}
						{section === "updates" ? <Updates data={updates} /> : null}
						{section === "team" ? <Team data={team} /> : null}
						{section === "press" ? <Press data={press} /> : null}
						{section === "contact" ? <Contact data={contact} /> : null}
						{section === "support" ? <Support data={support} /> : null}
					</section>
				)}
			</div>
		</div>
	);
};