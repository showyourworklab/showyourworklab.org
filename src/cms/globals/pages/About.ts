import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const About: GlobalConfig = {
	slug: "about",
	label: getLang("home", "about", "title"),
	admin: {
		group: "Pages",
	},
	versions: {
		drafts: { autosave: { interval: 200 } },
	},
	hooks: {
		afterChange: [
			async ({ doc, req }) => {
				revalidatePath(`/`);
				return doc;
			},
		],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			defaultValue: getLang("home", "about", "title"),
		},
		{
			name: "lede",
			label: "Lede",
			type: "richText",
		},
		{
			name: "body",
			label: "Body",
			type: "richText",
		},
		{
			name: "sections",
			label: "Sections",
			type: "array",
			fields: [
				{
					name: "title",
					type: "text",
					required: true,
				},
				{
					name: "body",
					label: "Body",
					type: "richText",
				},
				{
					name: "image",
					label: "Image",
					type: "upload",
					relationTo: "uploads",
					displayPreview: true,
				},
			]
		}
	]
};

export default About;
