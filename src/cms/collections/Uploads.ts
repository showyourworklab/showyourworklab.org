import type { CollectionConfig } from "payload"

const Uploads: CollectionConfig = {
	slug: "uploads",
	labels: {
		singular: "Upload",
		plural: "Uploads",
	},
	admin: {
		group: 'Uploads',
		// hidden: true
	},
	upload: {
		staticDir: "public/uploads",
		mimeTypes: ["image/*"],
		displayPreview: true,
		handlers: [
			async (req, { params }) => {
				// Redirect to static file path
				const staticPath = `/uploads/${params.filename}`;
				return Response.redirect(staticPath, 302);
			},
		],
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "center",
			},
			{
				name: "small",
				width: 640,
			},
			{
				name: "medium",
				width: 1024,
			},
			{
				name: "large",
				width: 1600,
			},
			{
				name: "xl",
				width: 2400,
			},
		],
		adminThumbnail: "thumbnail",
	},
	access: {
		read: () => true,
		update: () => true,
		create: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
		{
			name: "caption",
			type: "text",
		},
	],
};

export default Uploads;