
import { useContext } from "react";
import { useStore, createStore } from "zustand"
import { parseSywData } from "syw-react/tools";
import { VerifyStoreContext } from "@/providers/verify";
import { getFileFromSrc, getSrcFromFile } from "@/utils/helpers";

export type VerifyStore = ReturnType<typeof createVerifyStore>;

export interface VerifyStoreProps {
	// File
	file: File | null;
	setFile: (file: File | null) => Promise<void>;
	fileSrc: string | null;
	setFileSrc: (file: string | null) => Promise<void>;
	// Data
	data: any;
	setData: (data: any | null) => void;
};

export const createVerifyStore = () => createStore<VerifyStoreProps>()(
	(set, get) => ({
		// File
		file: null,
		setFile: async file => {
			const fileSrc =
				await getSrcFromFile(file);
			const data = fileSrc
				? await parseSywData(fileSrc)
				: null;
			set({
				file,
				fileSrc,
				data
			});
		},
		fileSrc: null,
		setFileSrc: async fileSrc => {
			const file =
				await getFileFromSrc(fileSrc);
			const data = fileSrc
				? await parseSywData(fileSrc)
				: null;
			set({
				file,
				fileSrc,
				data
			});
		},
		// Data
		data: null,
		setData: data => set({ data }),
	})
);

export function useVerifyStore<T>(selector: (state: VerifyStoreProps) => T): T {
	const store = useContext(VerifyStoreContext);
	if (!store) throw new Error("Missing VerifyStoreProvider");
	return useStore(store, selector);
}