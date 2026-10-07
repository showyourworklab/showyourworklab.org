"use client";
import { JsonTreeView } from "@ark-ui/react/json-tree-view";
import { ChevronRightIcon } from "lucide-react";
import { useLocale } from "@/utils/hooks";
import { useVerifyStore } from "@/store/verify";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";

export default function InfoTree() {
	const locale = useLocale();
	const data = useVerifyStore(state => state.data);
	
	return (
		<div
			className={"InfoTree"}
		>
			<h3
				className={cn(
					"InfoLabel",
					"InfoTreeLabel"
				)}
			>
				{getLang(locale, "verify", "info", "tree")}
			</h3>
			<div
				className={"InfoTreeContent"}
			>
				{data ?
					<JsonTreeView.Root
						data={data}
						defaultExpandedDepth={0}
						className={"InfoTreeRoot"}
					>
						<JsonTreeView.Tree
							arrow={<ChevronRightIcon />}
							className={"InfoTreeTree"}
						/>
					</JsonTreeView.Root>
				: "N/A"}
			</div>
		</div>
	);
}