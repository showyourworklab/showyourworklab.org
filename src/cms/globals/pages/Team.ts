import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";
import { revalidateSite } from "@/cms/utils/helpers";

export const Team: GlobalConfig = {
	slug: "team",
	label: getLang("home", "team", "title"),
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
					type: "text",
				},
				{
					name: "role",
					label: "Role",
					type: "text",
					localized: true,
				},
				{
					name: "url",
					label: "URL",
					type: "text",
				},
				{
					name: "body",
					label: "Body",
					type: "richText",
					localized: true,
				}
			]
		}
	]
};

export default Team;
