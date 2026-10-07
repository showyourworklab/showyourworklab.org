import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Support: GlobalConfig = {
	slug: "support",
	label: getLang("home", "support", "title"),
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
			defaultValue: getLang("home", "support", "title"),
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
			name: "groups",
			label: "Groups",
			type: "array",
			fields: [
				{
					name: "title",
					label: "Title",
					type: "text",
					required: true,
					localized: true,
				},
				{
					name: "items",
					label: "Items",
					type: "array",
					fields: [
						{
							name: "title",
							label: "Title",
							type: "text",
							required: true,
							localized: true,
						},
						{
							name: "image",
							label: "Image",
							type: "upload",
							relationTo: "uploads",
							displayPreview: true,
						},
						{
							name: "url",
							label: "URL",
							type: "text",
							localized: true,
						},
					]
				}
			]
		}
	]
};

export default Support;
