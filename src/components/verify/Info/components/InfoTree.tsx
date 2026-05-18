"use client";
import { JsonTreeView } from "@ark-ui/react/json-tree-view";
import { ChevronRightIcon } from "lucide-react";
import { useVerifyStore } from "@/store/verify";

export default function InfoTree() {
	const data = useVerifyStore(state => state.data);
	// console.log(data)
	return (
		<div
			className={"InfoTree"}
		>
			<div
				className={"InfoTreeLabel"}
			>
				View C2PA provenance as JSON
			</div>
			<JsonTreeView.Root
				data={data?.provenance?.manifestStore}
				defaultExpandedDepth={1}
				className={"InfoTreeRoot"}
			>
				<JsonTreeView.Tree
					arrow={<ChevronRightIcon />}
					className={"InfoTreeTree"}
				/>
			</JsonTreeView.Root>
		</div>
	);
}