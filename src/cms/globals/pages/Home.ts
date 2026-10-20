import type { Field, GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";
import { revalidateSite } from "@/cms/utils/helpers";

export const Home: GlobalConfig = {
	slug: "home",
	label: getLang("home", "title"),
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
			name: "hero",
			label: "Hero",
			type: "upload",
			relationTo: "uploads",
			displayPreview: true,
		},
		{
			name: "lede",
			label: "Lede",
			type: "richText",
			localized: true,
		},
	]
};

export default Home;
