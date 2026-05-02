import { readFileSync } from "node:fs";
import { join } from "node:path";

// SVGファイルから各属性を読み取る（モジュール初期化時に一度だけ）
const { d, strokeWidth, strokeLinecap, strokeLinejoin } = (() => {
	const raw = readFileSync(
		join(process.cwd(), "public/circle9_2.svg"),
		"utf-8",
	);
	const attr = (name: string, fallback: string) =>
		raw.match(new RegExp(`${name}="([^"]+)"`))?.[1] ?? fallback;
	return {
		d: attr("d", ""),
		strokeWidth: attr("stroke-width", "1.5"),
		strokeLinecap: attr(
			"stroke-linecap",
			"round",
		) as React.SVGProps<SVGPathElement>["strokeLinecap"],
		strokeLinejoin: attr(
			"stroke-linejoin",
			"round",
		) as React.SVGProps<SVGPathElement>["strokeLinejoin"],
	};
})();

export function CircleOrnament({
	className,
	style,
}: {
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			// viewBox を 0 0 800 800 のままにするなら、
			// preserveAspectRatio を設定して、枠いっぱいに広がるようにします
			viewBox="0 0 800 800"
			preserveAspectRatio="xMidYMid meet"
			aria-hidden="true"
			className={className}
			// style の transform を確実に適用させる
			style={{
				color: "var(--color-accent)",
				display: "block", // 隙間防止
			}}
		>
			<path
				d={d}
				fill="none"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap={strokeLinecap}
				strokeLinejoin={strokeLinejoin}
				// 反転しても線の太さが変わらないようにする魔法の属性
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	);
}
