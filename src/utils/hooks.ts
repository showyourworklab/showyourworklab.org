"use client";
import { useParams } from "next/navigation";
export function useLocale() {
	return useParams<{ lang: string }>().lang;
};