import "syw-react/styles.css"
import { HOME_SECTIONS } from "@/utils/constants";
import About from "@/components/home/About";
import Code from "@/components/home/Code";
import Press from "@/components/home/Press";
import Team from "@/components/home/Team/Team";

export default function Home() {

	return (
		<div
			className={"Home"}
		>
			{HOME_SECTIONS.map((section: string, index: number) =>
				<section
					key={index}
					id={section}
					className="HomeSection"
				>
					{section === "about" ? <About /> : null}
					{section === "code" ? <Code /> : null}
					{section === "press" ? <Press /> : null}
					{section === "team" ? <Team /> : null}
				</section>
			)}
		</div>
	);
};