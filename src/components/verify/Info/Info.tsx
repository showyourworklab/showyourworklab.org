"use client";
import { useVerifyStore } from "@/store/verify";
import InfoStatus from "./components/InfoStatus";
import InfoTree from "./components/InfoTree";
import InfoManifests from "./components/InfoManifests";

export default function Info() {
	const data = useVerifyStore(state => state.data);

	return (
		<div
			className={"Info"}
		>
			{data ?
				<>
					<InfoStatus />
					<InfoManifests />
					<InfoTree />
				</>
			: null}
		</div>
	);
}