"use client";

import { useState } from "react";
import { useLocale } from "@/utils/hooks";
import { getLang } from "@/utils/selectors";
import Collapse from "@/components/common/Collapse";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";
import InfoManifestTable from "./InfoManifestTable";

export default function InfoManifest({
	data
} : {
	data: any;
}) {
	const locale = useLocale();
	const [open, setOpen] = useState<boolean>(true);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div
			className={"InfoManifest"}
		>
			<Button
				custom={true}
				onClick={handleToggle}
				className={"InfoManifestToggle"}
			>
				<Icon
					type={data.type.key}
					className={"InfoManifestIcon"}
				/>
				<div
					className={"InfoManifestType"}
				>
					{getLang(locale, "verify", "info", "type", data.type.key)}
				</div>
			</Button>
			<Collapse
				open={open}
			>
				<InfoManifestTable
					data={data}
				/>
			</Collapse>
		</div>
	);
}