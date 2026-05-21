import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Updates: GlobalConfig = {
	slug: "updates",
	label: getLang("home", "updates", "title"),
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
			defaultValue: getLang("home", "updates", "title"),
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
			name: "items",
			label: "Items",
			type: "array",
			fields: [
				{
					name: "title",
					label: "Title",
					type: "text"
				},
				{
					name: "blurb",
					label: "Blurb",
					type: "richText"
				},
				{
					name: "url",
					label: "URL",
					type: "text"
				},
				{
					name: "date",
					label: "Date",
					type: "date"
				}
			]
		}
	]
};

export default Updates;
