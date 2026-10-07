"use client";
import { cn } from "@/utils/helpers";
import { useVerifyStore } from "@/store/verify";
import Upload from "@/components/verify/Upload";
import Info from "@/components/verify/Info";

export default function VerifyPage() {
	const init = useVerifyStore(state => state.init);

	return (
		<div
			className={cn(
				"Verify",
				init ? "Verify_init" : null,
			)}
		>
			<div
				className={"VerifyColumns"}
			>
				<div
					className={cn(
						"VerifyColumn",
						"VerifyColumnUpload",
					)}
				>
					<Upload />
				</div>
				<div
					className={cn(
						"VerifyColumn",
						"VerifyColumnInfo",
					)}
				>
					<Info />
				</div>
			</div>
		</div>
	);
};