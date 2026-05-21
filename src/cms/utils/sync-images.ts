import fs from "fs/promises";
import path from "path";
import type { Payload } from "payload";

const IMAGE_EXTENSIONS = new Set([
	".jpg",
	".jpeg",
	".png",
	".webp",
	".gif",
	".avif",
	".svg",
]);

const toPosixPath = (value: string): string => value.split(path.sep).join("/");

async function walkDirectory(dirPath: string): Promise<string[]> {
	const entries = await fs.readdir(dirPath, { withFileTypes: true });
	const results = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dirPath, entry.name);

			if (entry.isDirectory()) {
				return walkDirectory(fullPath);
			}

			if (entry.isFile()) {
				return [fullPath];
			}

			return [];
		}),
	);

	return results.flat();
}

export async function syncImages(payload: Payload): Promise<void> {
	const publicDir = path.resolve(process.cwd(), "public");
	const imagesDir = path.join(publicDir, "images");

	try {
		const stats = await fs.stat(imagesDir);
		if (!stats.isDirectory()) {
			return;
		}
	} catch {
		return;
	}

	const absoluteFiles = await walkDirectory(imagesDir);
	const imageFiles = absoluteFiles.filter((filePath) => {
		const extension = path.extname(filePath).toLowerCase();
		return IMAGE_EXTENSIONS.has(extension);
	});

	for (const absolutePath of imageFiles) {
		const relativeToPublic = toPosixPath(path.relative(publicDir, absolutePath));
		const publicPath = `/${relativeToPublic}`;
		const filename = path.basename(absolutePath);
		const defaultAlt = path
			.basename(filename, path.extname(filename))
			.replace(/[-_]+/g, " ")
			.trim();

		const existing = await payload.find({
			collection: "uploads",
			where: {
				sourcePath: {
					equals: publicPath,
				},
			},
			limit: 1,
			overrideAccess: true,
			pagination: false,
		});

		if (existing.docs.length > 0) {
			continue;
		}

		await payload.create({
			collection: "uploads",
			overrideAccess: true,
			data: {
				sourcePath: publicPath,
				alt: defaultAlt,
			},
			filePath: absolutePath,
		});
	}
}