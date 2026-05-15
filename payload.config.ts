import path from "path";
// import sharp from "sharp";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
// import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
// import { s3Storage } from "@payloadcms/storage-s3";
import Home from "@/cms/globals/pages/Home";
import Socials from "@/cms/globals/settings/Socials";
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
	admin: {
		livePreview: {
			// url: 'http://localhost:3000',
			url: ({ data, req, globalConfig }) => {
				const { slug } = globalConfig || {};
				const path = slug === "home" ? "/" : `/${slug}`;
				return `${req.protocol}//${req.host}/api/preview?url=${path}&secret=${process.env.PAYLOAD_SECRET}`;
			},
			globals: ["home", "about", "methodology", "faq", "download", "glossary", "policy", "submit", "contact", "current", "historical"],
		},
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.NEON_CONNECTION_URL || "",
		},
	}),
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	logger: {
		options: {
			level: "info"
		}
	},
	// sharp,
	telemetry: false,
	// email: (() => {
	// 	const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
	// 	const smtpHost = process.env.SMTP_HOST || "";
	// 	const smtpPassRaw = process.env.SMTP_PASS;
	// 	const smtpPass = smtpHost.includes("gmail.com") && smtpPassRaw
	// 		? smtpPassRaw.replace(/\s+/g, "")
	// 		: smtpPassRaw;

	// 	if (process.env.SMTP_PORT && Number.isNaN(smtpPort)) {
	// 		throw new Error("SMTP_PORT must be a valid number.");
	// 	}

	// 	const hasSMTPHost = Boolean(smtpHost);

	// 	if(!hasSMTPHost) return undefined;

	// 	return nodemailerAdapter({
	// 		defaultFromAddress: process.env.SMTP_FROM_ADDRESS || "",
	// 		defaultFromName: process.env.SMTP_FROM_NAME || "",
	// 		skipVerify: process.env.SMTP_SKIP_VERIFY === "true",
	// 		transportOptions: {
	// 			host: smtpHost,
	// 			port: smtpPort,
	// 			secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
	// 			auth: process.env.SMTP_USER && smtpPass ? {
	// 				user: process.env.SMTP_USER,
	// 				pass: smtpPass,
	// 			} : undefined,
	// 		},
	// 	});
	// })(),
	// Plugins
	plugins: [
		// s3Storage({
		// 	collections: {
		// 		uploads_media: {
		// 			disablePayloadAccessControl: true,
		// 			generateFileURL: ({ filename, prefix }) => {
		// 				const baseURL = process.env.NEXT_PUBLIC_UPLOADS_BASE_URL;
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
		// Globals
		Socials,
	],
	// Collections
	collections: [
		// Uploads,
	],
});