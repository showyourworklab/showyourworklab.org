import { getLang } from "@/utils/selectors"

export default function Code() {
	return (
		<>
			<div
				className="HomeSectionInner"
			>
				<hgroup>
					<h2
						className="HomeSectionTitle"
					>
						{getLang("home", "about", "title")}
					</h2>
					<p
						className="HomeSectionSubitle"
					>
						Build trust with your audience by displaying C2PA-compliant images within an interactive frame that exposes verifiable data about how an image was made.
					</p>
				</hgroup>
				<p>
					We’re creating a tool that lets you augment your site's images with optional C2PA provenance data. The tool wraps your images within a frame allowing users to explore multiple layers of verifiable data about how an image is made, including whether it was captured with a camera or generated with AI.
				</p>
				<p>
					The tool is being developed to easily integrate into your newsroom or organization's workflow. We're developing the tool for <code>React</code>, <code>Svelte</code>, and as a <code>WordPress</code> block.
				</p>
				<p>
					Contact us at <a href="mailto:info@showyourworklab.org">info@showyourworklab.org</a> to learn more and view a demo.
				</p>
			</div>
		</>
	);
}