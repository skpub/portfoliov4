import type { Metadata } from "next";
import Image from "next/image";
import face from "@/public/face.webp";

export const metadata: Metadata = {
	title: "佐藤海音",
	openGraph: { title: "佐藤海音" },
};

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center gap-5 px-8">
			<div className="relative w-48 h-48 rounded-full overflow-hidden bg-stone-200">
				<Image src={face} alt="佐藤海音" className="object-cover" priority />
			</div>
			<p className="text-[15px] tracking-[0.15em]">佐藤 海音</p>
			<dl className="space-y-4 text-sm tracking-widest">
				{[
					{ label: "お誕生日", value: "2002.02.11" },
					{
						label: "学位",
						value: "修士(理学)(新潟大学)",
					},
					{
						label: "現職",
						value: "サーバーサイドエンジニア\nフラー株式会社 (387A)",
					},
				].map((item) => (
					<div
						key={item.label}
						className="flex flex-col sm:flex-row sm:gap-8 border-b pb-4"
						style={{
							borderColor: "var(--b-weak)",
						}}
					>
						<dt
							className="w-32 font-bold shrink-0"
							style={{ color: "var(--f-shadow)" }}
						>
							{item.label}
						</dt>
						<dd className="whitespace-pre-line">{item.value}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
