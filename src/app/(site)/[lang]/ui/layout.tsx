import "syw-react/styles.css";

export default function UiLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
		</>
	);
};