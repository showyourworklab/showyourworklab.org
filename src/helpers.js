export function formatDate(dateStr) {
	const dateObj = new Date(dateStr);
	const formattedDateStr = dateObj.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return formattedDateStr;
}