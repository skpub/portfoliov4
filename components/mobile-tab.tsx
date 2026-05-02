import Link from "next/link";
import { SECTIONS } from "./sections";

export function MobileTab() {
	const mainSections = SECTIONS.filter((section) => section.id !== "blog");
	const blogSection = SECTIONS.find((section) => section.id === "blog");

	return (
		<nav
			className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center"
			style={{ backgroundColor: "var(--color-accent)" }}
			aria-label="メインナビゲーション"
		>
			<div className="flex w-full">
				{mainSections.map(({ id, label }) => (
					<Link
						key={id}
						href={`/#${id}`}
						className="flex flex-1 items-center justify-center py-5 text-white text-sm tracking-widest active:opacity-70 transition-opacity"
					>
						{label}
					</Link>
				))}
			</div>
			{blogSection ? (
				<Link
					href={`/#${blogSection.id}`}
					className="flex w-full items-center justify-center py-5 text-white text-sm tracking-widest border-t border-white/20 active:opacity-70 transition-opacity"
					style={{
						paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
					}}
				>
					{blogSection.label}
				</Link>
			) : null}
		</nav>
	);
}
