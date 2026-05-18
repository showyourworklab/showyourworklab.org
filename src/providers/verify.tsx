"use client";
import { createContext, ReactNode, useState } from "react";
import { VerifyStore, createVerifyStore } from "@/store/verify";

export const VerifyStoreContext = createContext<VerifyStore | null>(null);

export function VerifyStoreProvider({
	children
}: {
	children: ReactNode;
}) {
	const [store] = useState(() =>
		createVerifyStore()
	);
	return (
		<VerifyStoreContext.Provider
			value={store}
		>
			{children}
		</VerifyStoreContext.Provider>
	);
};