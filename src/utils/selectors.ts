import { LANG } from "@/utils/constants";

/** Gets value from object if exists */
export const getValue = (key: string, object: any) =>
	object && object.hasOwnProperty(key) ? (object as any)[key] : null;
/** Gets language */
export const getLang = (
	...strs: (string | number | object | null | undefined)[]
): string => {
	// If last argument is an object, remove this from string list and use as params
	const params = typeof strs[strs.length - 1] === "object"
		? strs.pop()
		: null;
	// If attempting to get lang for a year (i.e. `start_year`), just return year
	if(String(strs[0])?.includes("year") && strs.length === 2) return String(strs[1]);
	// If attempting to get lang for a month (i.e. `start_month` or `end_month`), return month name
	if(String(strs[0])?.includes("month") && strs.length === 2) return getValue(`month_${strs[1]}`, LANG);
	// Join all string arguments with underscore to create single key string
	const key = strs.filter(s => s !== null && s !== undefined).join("_");
	// Get lang using key from ./lang.ts object
	const lang = getValue(key, LANG) ?? "";
	// If params exists in arguments, replace param's keys found in lang string with param's value
	if(params && typeof params === "object") {
		return replaceStringWithParams(lang, params);
	} else {
		return lang;
	}
};
/** Replaces a string's placeholder values based on a key/value match in provided object (i.e. "Replace ${this} value" with { this: value }) */
export const replaceStringWithParams = (
	input: string,
	params: object
) => {
	return input
		?.split(/(\{[a-zA-Z0-9_]*\})/)
		?.map(str => {
			if (str && str[0] !== "{") return str
			str = str.replace("{", "").replace("}", "")
			return getValue(str, params) ?? str
		})
		?.join("")
};