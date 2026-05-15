import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Home: GlobalConfig = {
	slug: "home",
	label: getLang("site", "home", "title"),
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
			name: "name",
			type: "text",
			required: true,
			// admin: {
			// 	hidden: true
			// }
		},
	]
};

export default Home;
