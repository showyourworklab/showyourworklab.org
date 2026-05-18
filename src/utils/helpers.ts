/** Joins class names */
export const cn = (...arr: (string | null | undefined)[]) => arr.filter(item => item).join(" ");

export function formatDate(dateStr: string) {
	const dateObj = new Date(dateStr);
	const formattedDateStr = dateObj.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formattedDateStr;
};

/** Checks if URL matches origin of current site or is another */
export const isExternalUrl = (url: string) => {
	let currentOrigin = process.env.NEXT_PUBLIC_BASE_URL;
	try {
		const parsedURL = new URL(url);
		// If currentOrigin is not provided, try to infer it from the document
		if (!currentOrigin && typeof document !== "undefined") {
			currentOrigin = window.location.origin;
		}
		if (!currentOrigin) {
			// If currentOrigin is still not available, and url is absolute, assume it is external.
			return parsedURL.origin !== (parsedURL.protocol + "//" + parsedURL.hostname);
		}

		return parsedURL.origin !== currentOrigin;
	} catch (e) {
		// If URL parsing fails, it's likely not a valid URL, so treat it as internal.
		return false;
	}
};

export const getSrcFromFile = async (file: File | null) => {
	if(file) {
		try {
			const fileSrc = file
				? URL.createObjectURL(file)
				: null;
			return fileSrc;
		} catch {
			return null;
		}
	} else {
		return null;
	}
};

export const getFileFromSrc = async (src: string | null) => {
	if(src) {
		try {
			new URL(src);
			const response = await fetch(src);
			if (!response.ok) {
				throw new Error("Failed to fetch file");
			}
			const blob = await response.blob();
			const file = new File(
				[blob],
				"uploaded-file",
				{
					type: blob.type
				});
			return file;
		} catch {
			return null;
		}
	} else {
		return null;
	}
};