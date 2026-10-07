"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/utils/hooks";
import { getLang } from "@/utils/selectors";
import { getDateString } from "@/utils/helpers";

export default function InfoManifestTableRow({
	type,
	value,
} : {
	type: string;
	value: any;
}) {
	const locale = useLocale();
	
	const formattedValue = useMemo(() => {
		switch(type) {
			case 'producer':
				return value?.map((v: any) => v?.name).join(', ')
			case 'generator':
				return value?.map((v: any) => v?.name).join(', ')
			case 'timestamp':
				return getDateString(locale ?? '', value)
			default:
				return typeof value === "string" ? value : value?.value
		}
	}, [locale, type, value]);
	
	return (
		<div
			className={"InfoManifestTableRow"}
		>
			<dt
				className={"InfoManifestTableRowLabel"}
			>
				{getLang(locale, "verify", "info", "field", type)}
			</dt>
			<dd
				className={"InfoManifestTableRowValue"}
			>
				{formattedValue ?? "N/A"}
			</dd>
		</div>
	);
}