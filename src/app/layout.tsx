import { ReactNode } from "react";

export interface RootLayoutProps {
	children: ReactNode;
};

export default function RootLayout({
	children,
}: RootLayoutProps) {
	return (
		<>
			{children}
		</>
	);
}
