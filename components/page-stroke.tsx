import type { HTMLAttributes, ReactNode } from "react";
import { CircleOrnament } from "@/components/circle-ornament";

const CORNERS = [
	{ pos: "top-0 left-0", flip: "scale(-1,-1)" },
	{ pos: "top-0 right-0", flip: "scale(1, -1)" },
	{ pos: "bottom-0 left-0", flip: "scale(-1, 1)" },
	{ pos: "bottom-0 right-0", flip: "scale(1, 1)" },
] as const;

const CORNERS_SHADOW = [
	{ pos: "top-0 left-0", flip: "scale(-1,-1)" },
	{ pos: "top-0 right-0", flip: "scale(1, -1)" },
	{ pos: "bottom-0 left-0", flip: "scale(-1, 1)" },
	{ pos: "bottom-0 right-0", flip: "scale(1, 1)" },
] as const;

type PageStrokeProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
};

export function PageStroke({ children, className, ...props }: PageStrokeProps) {
	return (
		<div className={`relative overflow-hidden ${className ?? ""}`} {...props}>
			{CORNERS_SHADOW.map(({ pos, flip }) => (
				<div
					style={{ transform: flip, transformOrigin: "center" }}
					key={pos}
					className={`pointer-events-none absolute ${pos} w-20 h-20 overflow-hidden`}
				>
					<div className="w-40 h-40">
						<CircleOrnament className="w-full h-full text-b-shadow" />
					</div>
				</div>
			))}
			{CORNERS.map(({ pos, flip }) => (
				<div
					style={{ transform: flip, transformOrigin: "center" }}
					key={pos}
					className={`pointer-events-none absolute ${pos} w-24 h-24 overflow-hidden`}
				>
					<div className="w-48 h-48">
						<CircleOrnament className="w-full h-full text-(--color-accent)" />
					</div>
				</div>
			))}
			{children}
		</div>
	);
}
