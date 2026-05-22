import type { Metadata } from "next";
import { Instrument_Sans, Rethink_Sans } from "next/font/google";
import { cn } from "@/utils/helpers";
import { getLang } from "@/utils/selectors";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "../globals.css";

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
	description: "Show Your Work Lab provides news organizations with the tools and strategies to make visual journalism verifiable, transparent, and trustworthy.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
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