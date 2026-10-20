import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";
import { revalidateSite } from "@/cms/utils/helpers";

export const Announcement: GlobalConfig = {
	slug: "announcement",
	label: getLang("home", "announcement", "title"),
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
			localized: true,
		},
		{
			name: "url",
			label: "URL",
			type: "text",
			localized: true,
		},
	]
};

export default Announcement;
