"use client";
import { useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

const PayloadLivePreview = () => {
	const router = useRouter();
	return (
		<RefreshRouteOnSave
			refresh={() => router.refresh()}
			serverURL={process.env.NEXT_PUBLIC_BASE_URL ?? ""}
		/>
	);
};

export default PayloadLivePreview;