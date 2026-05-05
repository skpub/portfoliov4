export const SECTIONS = [
	{
		id: "career",
		label: "略歴",
		title: "Career",
		description: "佐藤海音の略歴。",
	},
	{
		id: "hobbies",
		label: "趣味",
		title: "Hobbies",
		description: "好きなことや日々の関心ごと。",
	},
	{
		id: "works",
		label: "製作",
		title: "Works",
		description: "これまでに作ったものや取り組み。",
	},
	{
		id: "blog",
		label: "note",
		title: "Articles",
		description: "note記事への入り口。",
	},
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export function getSection(id: string) {
	return SECTIONS.find((section) => section.id === id);
}
