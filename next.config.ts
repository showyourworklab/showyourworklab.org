import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// transpilePackages: ["syw-common"],
	images: {
		deviceSizes: [640, 828, 1080, 1200, 1600, 1920, 2400, 3200],
		qualities: [90],
		localPatterns: [{ pathname: "/uploads/**" }],
	},
	async redirects() {
		return [
			{
				source: '/admin/api/uploads/file/:filename*',
				destination: '/uploads/:filename*',
				permanent: false,
			},
		]
	},
};

export default nextConfig;
