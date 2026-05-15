import type { CollectionConfig } from "payload"

const UploadsMedia: CollectionConfig = {
	slug: "uploads_media",
	labels: {
		singular: "Media Upload",
		plural: "Media Uploads",
	},
	admin: {
		group: 'Uploads',
		// hidden: true
	},
	upload: {
		mimeTypes: ["image/*"],
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
		// adminThumbnail: "thumbnail",
		adminThumbnail: ({ doc } : { doc: any }) => {
			// Use the correct field for your thumbnail URL
			return doc?.sizes?.thumbnail?.url || doc?.url;
		},
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
	],
};

export default UploadsMedia;