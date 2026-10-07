import "syw-react/styles.css";
import { VerifyStoreProvider } from "@/providers/verify";

export default function VerifyLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<VerifyStoreProvider>
			{children}
		</VerifyStoreProvider>
	);
};