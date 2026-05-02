import Link from "next/link";
import { SECTIONS } from "./sections";

export function DesktopTab() {
	return (
		<nav
			className="sticky top-0 z-50 flex w-full items-center justify-center"
			style={{ backgroundColor: "var(--color-accent)" }}
			aria-label="メインナビゲーション"
		>
			{SECTIONS.map(({ id, label }) => (
				<Link
					key={id}
					href={`/#${id}`}
					className="flex items-center justify-center px-12 py-5 text-white text-sm tracking-widest active:opacity-70 transition-opacity"
				>
					{label}
				</Link>
			))}
		</nav>
	);
}
