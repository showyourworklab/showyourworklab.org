"use client"
import type { RowLabelComponent } from "payload";
import { useRowLabel } from "@payloadcms/ui"

const ArrayRowLabel = () => {
	let label;
	const { data, rowNumber } = useRowLabel<{ title?: string, name?: string }>();
	if (data?.title) {
		label =  data.title;
	} else if (data?.name) {
		label = data.name;
	} else {
		label = undefined;
	}
	return label;
};

export default ArrayRowLabel;