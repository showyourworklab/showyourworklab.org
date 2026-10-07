"use client";
import { useLocale } from "@/utils/hooks";
import { useVerifyStore } from "@/store/verify";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import InfoManifest from "./InfoManifest";

export default function InfoManifests() {
	const locale = useLocale();
	const data = useVerifyStore(state => state.data);
	return (
		<div
			className={"InfoManifests"}
		>
			<h3
				className={cn(
					"InfoLabel",
					"InfoManifestsLabel"
				)}
			>
				{getLang(locale, "verify", "info", "manifests")}
			</h3>
			{data?.manifests && data?.manifests.length ?
				data?.manifests?.map((manifest: any, index: number) =>
					<InfoManifest
						key={index}
						data={manifest}
					/>
				)
			: "N/A"}
		</div>
	);
}