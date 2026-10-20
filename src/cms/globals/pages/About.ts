import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";
import { revalidateSite } from "@/cms/utils/helpers";

export const About: GlobalConfig = {
	slug: "about",
	label: getLang("home", "about", "title"),
	admin: {
		group: "Pages",
	},
	versions: {
		drafts: true,
	},
	hooks: {
		afterChange: [revalidateSite],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
			defaultValue: getLang("home", "about", "title"),
		},
		{
			name: "lede",
			label: "Lede",
			type: "richText",
			localized: true,
		},
		{
			name: "body",
			label: "Body",
			type: "richText",
			localized: true,
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
					localized: true,
				},
				{
					name: "body",
					label: "Body",
					type: "richText",
					localized: true,
				},
				{
					name: "prompt",
					label: "Prompt",
					type: "text",
				},
				{
					name: "url",
					label: "URL",
					type: "text",
				},
				// {
				// 	name: "items",
				// 	label: "Items",
				// 	type: "array",
				// 	fields: [
				// 		{
				// 			name: "title",
				// 			label: "Title",
				// 			type: "text",
				// 			required: true,
				// 			localized: true,
				// 		},
				// 		{
				// 			name: "prompt",
				// 			label: "Prompt",
				// 			type: "text",
				// 			localized: true,
				// 		},
				// 		{
				// 			name: "url",
				// 			label: "URL",
				// 			type: "text",
				// 			localized: true,
				// 		},
				// 	]
				// },
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
