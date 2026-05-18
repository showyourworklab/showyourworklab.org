"use client";
import { FileUpload, useFileUpload } from "@ark-ui/react/file-upload";
import { useVerifyStore } from "@/store/verify";
import UploadUrl from "./components/UploadUrl";
import UploadDropzone from "./components/UploadDropzone";
import UploadResults from "./components/UploadResults";
import { UPLOAD_ACCEPT } from "./utils/constants";
import { getLang } from "@/utils/selectors";
import UploadExamples from "./components/UploadExamples";

export default function Upload() {
	const setFile = useVerifyStore(state => state.setFile);

	const fileUpload = useFileUpload({
		maxFiles: 1,
		accept: UPLOAD_ACCEPT.join(","),
		onFileAccept: (details) => {
			const file = details.files[0];
			// console.log(details)
			if(file) {
				setFile(file);
			} else {
				setFile(null);
			};
		},
		onFileReject: (details) => {
			// console.log(details);
			setFile(null);
		}
	});

	return (
		<div
			className={"Upload"}
		>
			<div
				className={"UploadInner"}
			>
				<FileUpload.RootProvider
					// accept={UPLOAD_ACCEPT.join(",")}
					value={fileUpload}
					className={"UploadRoot"}
				>
					<FileUpload.Label
						className={"UploadLabel"}
					>
						{getLang("verify", "upload", "label")}
					</FileUpload.Label>
					<UploadDropzone />
					<UploadUrl />
					<UploadExamples />
					<UploadResults />
					<FileUpload.HiddenInput />
				</FileUpload.RootProvider>
			</div>
		</div>
	);
}