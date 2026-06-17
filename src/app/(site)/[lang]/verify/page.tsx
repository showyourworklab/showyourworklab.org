import "syw-react/styles.css"
import { cn } from "@/utils/helpers";
import { VerifyStoreProvider } from "@/providers/verify";
import Upload from "@/components/verify/Upload";
import Info from "@/components/verify/Info";

export default function Verify() {
	return (
		<VerifyStoreProvider>
			<div
				className={cn(
					"Verify",
					"VerifyColumns",
				)}
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
		</VerifyStoreProvider>
	);
};