import type { Metadata } from "next";
import { Instrument_Sans, Rethink_Sans } from "next/font/google";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import { LOCALES } from "@/utils/constants";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "@/app/globals.css";

const instrumentSans = Instrument_Sans({
	variable: "--font-instrument-sans",
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "700"]
});

const rethinkSans = Rethink_Sans({
	variable: "--font-rethink-sans",
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "700", "800"]
});

export const metadata: Metadata = {
	title: getLang("site", "title"),
	description: getLang("site", "description"),
};

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const locale = (await params)?.locale ?? LOCALES[0];

	return (
		<html
			lang={locale}
			className={cn(
				instrumentSans.variable,
				rethinkSans.variable
			)}
		>
			<body>
				<Header />
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};