"use client";

import { useState } from "react";
import { useLocale } from "@/utils/hooks";
import { useVerifyStore } from "@/store/verify";
import { getLang } from "@/utils/selectors";
import Collapse from "@/components/common/Collapse";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";


export default function InfoStatus() {
	const locale = useLocale();
	const data = useVerifyStore(state => state.data);
	console.log(data)
	return (
		<div
			className={"InfoStatus"}
		>
			<Button
				outlined={true}
				before={
					<Icon
						type={data?.status}
						className={"InfoStatusButtonIcon"}
					/>
				}
				className={"InfoStatusButton"}
			>
				{getLang(locale, "verify", "info", "status", data?.status)}
			</Button>
		</div>
	);
}