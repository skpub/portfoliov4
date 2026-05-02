import Link from "next/link";
import { CircleOrnament } from "@/components/circle-ornament";

const NAV_ITEMS = [
	{ href: "/about", label: "略歴" },
	{ href: "/hobbies", label: "趣味" },
	{ href: "/works", label: "製作" },
] as const;

// 全コーナーで SVG を top-0 left-0 に置き、transform でミラーして対称を保つ
const CORNERS = [
	{ pos: "top-0 left-0", flip: "scale(-1,-1)" },
	{ pos: "top-0 right-0", flip: "scale(1, -1)" },
	{ pos: "bottom-0 left-0", flip: "scale(-1, 1)" },
	{ pos: "bottom-0 right-0", flip: "scale(1, 1)" },
] as const;

export function MobileShell({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ backgroundColor: "var(--background)" }}
		>
			{/* メインコンテンツ */}
			<main className="relative flex flex-col flex-1 overflow-hidden">
				{CORNERS.map(({ pos, flip }) => (
					<div
						style={{ transform: flip, transformOrigin: "center" }}
						key={pos}
						className={`absolute ${pos} w-24 h-24 overflow-hidden pointer-events-none`}
					>
						<div className="w-48 h-48">
							<CircleOrnament className="w-full h-full text-[var(--color-accent)]" />
						</div>
					</div>
					// <div
					// 	key={pos}
					// 	className={`absolute ${pos} w-28 h-28 overflow-hidden pointer-events-none`}
					// >
					// 	<CircleOrnament
					// 		className={`absolute top-0 left-0 w-64 h-64 origin-center`}
					// 		style={flip ? { transform: flip } : undefined}
					// 	/>
					// </div>
				))}
				{children}
			</main>

			{/* 永続ナビゲーション */}
			<nav
				className="flex flex-col items-center"
				style={{ backgroundColor: "var(--color-accent)" }}
				aria-label="メインナビゲーション"
			>
				<div className="flex w-full">
					{NAV_ITEMS.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="flex flex-1 items-center justify-center py-5 text-white text-sm tracking-widest active:opacity-70 transition-opacity"
						>
							{label}
						</Link>
					))}
				</div>
				<Link
					href="/blog"
					className="flex w-full items-center justify-center py-5 text-white text-sm tracking-widest border-t border-white/20 active:opacity-70 transition-opacity"
					style={{
						paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
					}}
				>
					ブログ
				</Link>
			</nav>
		</div>
	);
}
