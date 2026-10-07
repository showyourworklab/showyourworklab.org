"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FileUpload } from "@ark-ui/react/file-upload";
import { PaperclipIcon, UploadIcon } from "lucide-react";
import { useVerifyStore } from "@/store/verify";
import { getLang } from "@/utils/selectors";
import Button from "@/components/common/Button";

export default function UploadDropzone() {
	const { lang: locale } = useParams<{ lang: string }>();
	const fileSrc = useVerifyStore(state => state.fileSrc);
	return (
		<FileUpload.Dropzone
			disableClick
			{...Boolean(fileSrc) ? {
				"data-uploaded": true
			} : {}}
			className={"UploadDropzone"}
		>
			<div
				className={"UploadDropzoneContent"}
			>
				<UploadIcon
					className={"UploadDropzoneIcon"}
				/>
				<span
					className={"UploadDropzoneTitle"}
				>
					{getLang(locale, "verify", "upload", "dropzone", "title")}
				</span>
				<span
					className={"UploadDropzoneDescription"}
				>
					{getLang(locale, "verify", "upload", "dropzone", "description")}
				</span>

				<FileUpload.Trigger
					asChild
				>
					<Button
						before={<PaperclipIcon />}
						outlined
						className={"UploadDropzoneTrigger"}
					>
						{getLang(locale, "verify", "upload", "trigger")}
					</Button>
				</FileUpload.Trigger>
			</div>
			{fileSrc ?
				<img
					src={fileSrc}
					alt=""
					className={"UploadDropzoneImage"}
				/>
			: null}
		</FileUpload.Dropzone>
	);
};