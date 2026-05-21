import { revalidatePath } from "next/cache";
import type { Field, GlobalConfig } from "payload";
import { getLang } from "@/utils/selectors";

export const Home: GlobalConfig = {
	slug: "home",
	label: getLang("home", "title"),
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
			name: "hero",
			label: "Hero",
			type: "upload",
			relationTo: "uploads",
			displayPreview: true,
		}
	]
};

export default Home;
