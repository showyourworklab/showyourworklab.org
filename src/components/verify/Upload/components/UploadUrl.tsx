"use client";
import { useCallback, useEffect, useState } from "react";
import { useVerifyStore } from "@/store/verify";
import Field from "@/components/common/Field/Field";

export default function UploadUrl() {
	const [value, setValue] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const fileSrc = useVerifyStore(state => state.fileSrc);
	const setFileSrc = useVerifyStore(state => state.setFileSrc);

	const handleFieldChange = useCallback((event: any) => {
		const newValue = event?.target?.value;
		setValue(newValue);
	}, []);

	useEffect(() => {
		if(typeof value === "string" && value) {
			setValue(value);
			try {
				new URL(value);
				setFileSrc(value);
				setError(null);
			} catch {
				setFileSrc(null);
				setError("Invalid URL or unable to fetch file");
			}
		} else {
			setValue(null);
			setError(null);
		}
	}, [value]);

	useEffect(() => {
		if(value !== fileSrc) {
			setValue(null);
		}
	}, [fileSrc]);

	return (
		<Field
			label="Paste your image URL"
			error={error}
			value={value ?? ""}
			onChange={handleFieldChange}
			className="UploadUrl"
		/>
	);
};