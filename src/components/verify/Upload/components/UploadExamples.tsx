"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ToggleGroup, ToggleGroupValueChangeDetails, useToggleGroup } from "@ark-ui/react";
import { useVerifyStore } from "@/store/verify";
import { UPLOAD_EXAMPLES } from "../utils/constants";
import { getLang } from "@/utils/selectors";

export default function UploadExamples() {
	const [error, setError] = useState<string | null>(null);
	const fileSrc = useVerifyStore(state => state.fileSrc);
	const setFileSrc = useVerifyStore(state => state.setFileSrc);

	const handleValueChange = useCallback((details: ToggleGroupValueChangeDetails) => {
		const newValue = details?.value?.[0] ?? null;
		setFileSrc(newValue);
	}, [setFileSrc]);

	const toggleGroup = useToggleGroup({
		value: fileSrc && UPLOAD_EXAMPLES.includes(fileSrc) ? [fileSrc] : [],
		multiple: false,
		deselectable: true,
		onValueChange: handleValueChange,
	});

	return (
		<div
			className={"UploadExamples"}
		>
			<div
				className={"UploadExamplesLabel"}
			>
				{getLang("upload", "examples", "title")}
			</div>
			<ToggleGroup.RootProvider
				value={toggleGroup}
				className={"UploadExamplesToggle"}
			>
				{UPLOAD_EXAMPLES.map((
					example: string,
					index: number
				) =>
					<ToggleGroup.Item
						key={index}
						value={example}
						className={"UploadExamplesToggleItem"}
					>
						<div>
							<img
								src={example}
								alt={`Example image #${index}`}
							/>
						</div>
					</ToggleGroup.Item>
				)}
			</ToggleGroup.RootProvider>
		</div>
	);
};