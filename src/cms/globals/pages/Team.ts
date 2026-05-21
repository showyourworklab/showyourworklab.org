import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Team: GlobalConfig = {
	slug: "team",
	label: getLang("home", "team", "title"),
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
			defaultValue: getLang("home", "team", "title"),
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
					name: "image",
					label: "Image",
					type: "upload",
					relationTo: "uploads",
					displayPreview: true,
				},
				{
					name: "name",
					label: "Name",
					type: "text"
				},
				{
					name: "role",
					label: "Role",
					type: "text"
				},
				{
					name: "url",
					label: "URL",
					type: "text"
				},
				{
					name: "body",
					label: "Body",
					type: "richText"
				}
			]
		}
	]
};

export default Team;
