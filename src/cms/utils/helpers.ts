import { revalidatePath } from "next/cache";
import type { GlobalAfterChangeHook } from "payload";

export const generateFileUrl = (
	params: {
		filename: string,
		prefix?: string
	},
	baseUrl?: string
) => {
	const normalizedPrefix = params.prefix ? `${params.prefix.replace(/\/$/, "")}/` : "";
	return `${baseUrl}/${normalizedPrefix}${params.filename}`;
};

export const revalidateSite: GlobalAfterChangeHook = ({ doc }) => {
	if (doc?._status === "draft") return doc;
	// Must match the route's file path, including route groups (cache tag: _N_T_/(site)/[lang]/layout)
	revalidatePath("/(site)/[lang]", "layout");
	return doc;
};
