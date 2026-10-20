import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";
import { revalidateSite } from "@/cms/utils/helpers";

export const Contact: GlobalConfig = {
	slug: "contact",
	label: getLang("home", "contact", "title"),
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
			defaultValue: getLang("home", "contact", "title"),
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
		}
	]
};

export default Contact;
