export const ORIGIN =
	process.env.ORIGIN ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sk-dev.org";

export const OPEN_GRAPH_IMAGE = {
	url: new URL("/og-image.jpg", ORIGIN).toString(),
	width: 1200,
	height: 1200,
	alt: "佐藤海音",
	type: "image/jpeg",
} as const;
