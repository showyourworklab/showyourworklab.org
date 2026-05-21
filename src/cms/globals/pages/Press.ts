import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Press: GlobalConfig = {
	slug: "press",
	label: getLang("home", "press", "title"),
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
			defaultValue: getLang("home", "press", "title"),
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
					name: "source",
					label: "Source",
					type: "text"
				},
				{
					name: "title",
					label: "Title",
					type: "text"
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

export default Press;
