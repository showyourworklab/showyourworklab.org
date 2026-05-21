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