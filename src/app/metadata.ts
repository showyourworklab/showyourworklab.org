import type { Metadata } from "next";

export const metadata: Metadata = {
	icons: {
		icon: [
			{
				url: "/favicon/favicon.ico"
			},
			{
				url: "/favicon/favicon.png",
				type: "image/png",
			},
			{
				url: "/favicon/favicon-16x16.png",
				type: "image/png",
				sizes: "16x16"
			},
			{
				url: "/favicon/favicon-32x32.png",
				type: "image/png",
				sizes: "32x32"
			},
		],
		// apple: {
		// 	url: "/favicon/apple-touch-icon.png"
		// },
	},
	// manifest: "/site.webmanifest",
}

export default metadata;