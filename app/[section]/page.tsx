import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollSections } from "@/components/scroll-sections";
import { ScrollToSection } from "@/components/scroll-to-section";
import { getSection, SECTIONS } from "@/components/sections";
import { OPEN_GRAPH_IMAGE } from "@/lib/site-metadata";

type SectionPageProps = {
	params: Promise<{ section: string }>;
};

export function generateStaticParams() {
	return SECTIONS.map(({ id }) => ({ section: id }));
}

export async function generateMetadata({
	params,
}: SectionPageProps): Promise<Metadata> {
	const { section: sectionId } = await params;
	const section = getSection(sectionId);

	if (!section) {
		return {};
	}

	const title = `${section.label} | 佐藤海音`;

	return {
		title,
		description: section.description,
		alternates: {
			canonical: `/${section.id}`,
		},
		openGraph: {
			title,
			description: section.description,
			url: `/${section.id}`,
			images: [OPEN_GRAPH_IMAGE],
		},
	};
}

export default async function SectionPage({ params }: SectionPageProps) {
	const { section: sectionId } = await params;
	const section = getSection(sectionId);

	if (!section) {
		notFound();
	}

	return (
		<>
			<ScrollToSection sectionId={section.id} />
			<ScrollSections />
		</>
	);
}
