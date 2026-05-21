import type { GlobalConfig } from "payload";
import { SOCIALS } from "@/utils/constants";
import { getLang } from "@/utils/selectors";

export const Socials: GlobalConfig = {
	slug: "socials",
	label: "Socials",
	admin: {
		group: "Settings",
	},
	fields: SOCIALS.map(social => ({
		name: social,
		label: getLang("social", social),
		type: "text"
	}))
};

export default Socials;
