import type { Metadata } from "next";
import { ScrollSections } from "@/components/scroll-sections";

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
	},
};

export default function Home() {
	return <ScrollSections />;
}
