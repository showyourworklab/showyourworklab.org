"use client";
import { useVerifyStore } from "@/store/verify";
import InfoTree from "./components/InfoTree";
import InfoManifest from "./components/InfoManifest";

export default function Info() {
	const data = useVerifyStore(state => state.data);

	return (
		<div
			className={"Info"}
		>
			{data?.manifests?.map((manifest: any, index: number) =>
				<InfoManifest
					key={index}
					data={manifest}
				/>
			)}
			{data ?
				<InfoTree />
			: null}
		</div>
	);
}