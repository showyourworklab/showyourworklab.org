import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
// import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
// import { s3Storage } from "@payloadcms/storage-s3";
import Home from "@/cms/globals/pages/Home";
import About from "@/cms/globals/pages/About";
import Updates from "@/cms/globals/pages/Updates";
import Team from "@/cms/globals/pages/Team";
import Press from "@/cms/globals/pages/Press";
import Contact from "@/cms/globals/pages/Contact";
import Support from "@/cms/globals/pages/Support";
import Uploads from "@/cms/collections/Uploads";
// import { AWS_S3_CONFIG } from "@/db/utils/s3";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	serverURL: process.env.NEXT_PUBLIC_BASE_URL,
	routes: {
		api: "/admin/api",
		// graphQL: "/admin/graphql",
		// graphQLPlayground: "/admin/graphql-playground"
	},
	// admin: {
	// 	livePreview: {
	// 		// url: 'http://localhost:3000',
	// 		url: ({ data, req, globalConfig }) => {
	// 			const { slug } = globalConfig || {};
	// 			const path = slug === "home" ? "/" : `/${slug}`;
	// 			return `${req.protocol}//${req.host}/api/preview?url=${path}&secret=${process.env.PAYLOAD_SECRET}`;
	// 		},
	// 		globals: ["home"],
	// 	},
	// },
	db: postgresAdapter({
		pool: {
			connectionString: process.env.NEON_CONNECTION_URL || "",
		},
		push: process.env.NODE_ENV !== "production",
	}),
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	logger: {
		options: {
			level: "info"
		}
	},
	sharp,
	telemetry: false,
	// Plugins
	plugins: [
		// s3Storage({
		// 	collections: {
		// 		uploads_media: {
		// 			disablePayloadAccessControl: true,
		// 			generateFileURL: ({ filename, prefix }) => {
		// 				const baseURL = process.env.NEXT_PUBLIC_UPLOADS_MEDIA_BASE_URL;
		// 				const normalizedPrefix = prefix ? `${prefix.replace(/\/$/, "")}/` : "";
		// 				return `${baseURL}/${normalizedPrefix}${filename}`;
		// 			},
		// 		}
		// 	},
		// 	bucket: `${process.env.AWS_S3_BUCKET_UPLOADS}`,
		// 	config: AWS_S3_CONFIG,
		// }),
	],
	// Globals
	globals: [
		// Pages
		Home,
		About,
		Updates,
		Team,
		Press,
		Contact,
		Support
	],
	// Collections
	collections: [
		Uploads,
	],
});