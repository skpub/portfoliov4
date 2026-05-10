import type { Metadata } from "next";
import { ScrollSections } from "@/components/scroll-sections";
import { OPEN_GRAPH_IMAGE } from "@/lib/site-metadata";

export const metadata: Metadata = {
	title: "佐藤海音",
	description: "佐藤海音のポートフォリオ",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "佐藤海音",
		description: "佐藤海音のポートフォリオ",
		url: "/",
		images: [OPEN_GRAPH_IMAGE],
	},
};

export default function Home() {
	return <ScrollSections />;
}
