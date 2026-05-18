"use client";
import { cn } from "@/utils/helpers";
import { FileUpload } from "@ark-ui/react/file-upload";
import { AlertCircleIcon, ImageIcon, XIcon } from "lucide-react";

export default function UploadResults() {

	return (
		<div
			className={"UploadResults"}
		>
			<FileUpload.Context>
				{({ acceptedFiles, rejectedFiles }) => (
					<>
						{acceptedFiles.length > 0 && (
							<div
								className={"UploadResultsAccepted"}
							>
								<FileUpload.ItemGroup
									className={"UploadResultsItemGroup"}
								>
									{acceptedFiles.map((file) => (
										<FileUpload.Item
											key={file.name}
											file={file}
											className={"UploadResultsItem"}
										>
											<FileUpload.ItemPreview
												type="image/*"
												className={cn(
													"UploadResultsItemPreview",
													"UploadResultsItemPreview_image"
												)}
											>
												<FileUpload.ItemPreviewImage
													className={"UploadResultsItemPreviewImage"}
												/>
											</FileUpload.ItemPreview>
											<FileUpload.ItemPreview
												type=".*"
												className={cn(
													"UploadResultsItemPreview",
													"UploadResultsItemPreview_icon"
												)}
											>
												<ImageIcon
													className={"UploadResultsItemPreviewIcon"}
												/>
											</FileUpload.ItemPreview>
											<FileUpload.ItemName
												className={"UploadResultsItemName"}
											/>
											<FileUpload.ItemSizeText
												className={"UploadResultsItemSizeText"}
											/>
											<FileUpload.ItemDeleteTrigger
												className={"UploadResultsItemDeleteTrigger"}
											>
												<XIcon />
											</FileUpload.ItemDeleteTrigger>
										</FileUpload.Item>
									))}
								</FileUpload.ItemGroup>
							</div>
						)}
						
						{rejectedFiles.length > 0 && (
							<div
								className={"UploadResultsRejected"}
							>
								<FileUpload.ItemGroup
									className={"UploadResultsItemGroup"}
								>
									{rejectedFiles.map((fileRejection) => (
										<FileUpload.Item
											key={fileRejection.file.name}
											file={fileRejection.file}
											className={"UploadResultsItem"}
											data-rejected
										>
											<div
												className={"UploadResultsItemPreview"}
											>
												<AlertCircleIcon />
											</div>
											<FileUpload.ItemName
												className={"UploadResultsItemName"}
											/>
											<FileUpload.ItemSizeText
												className={"UploadResultsItemSizeText"}
											/>
											<div
												className={"UploadResultsErrorList"}
											>
												{fileRejection.errors.map((error) => (
													<div
														key={error}
														className={"UploadResultsErrorItem"}
													>
														{error}
													</div>
												))}
											</div>
										</FileUpload.Item>
									))}
								</FileUpload.ItemGroup>
							</div>
						)}
					</>
				)}
			</FileUpload.Context>
		</div>
	);
};