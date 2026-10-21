import { revalidatePath } from "next/cache";
import { purgeCache } from "@netlify/functions";
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

export const revalidateSite: GlobalAfterChangeHook = async ({ doc, req }) => {
	if (doc?._status === "draft") return doc;
	revalidatePath("/(site)/[lang]", "layout");
	if (process.env.NETLIFY) {
		await purgeCache().catch((error) => {
			req.payload.logger.error({
				err: error,
				msg: "Netlify cache purge failed"
			});
		});
	}
	return doc;
};
