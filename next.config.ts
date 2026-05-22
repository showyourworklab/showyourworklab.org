import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
