import Image from "next/image";
import { PageStroke } from "@/components/page-stroke";
import face from "@/public/face.webp";
import { SECTIONS } from "./sections";

const BIRTHDAY = new Date("2002-02-11T00:00:00+09:00");

function calculateAge(birthday: Date) {
	const today = new Date();
	const hasBirthdayPassed =
		today.getMonth() > birthday.getMonth() ||
		(today.getMonth() === birthday.getMonth() &&
			today.getDate() >= birthday.getDate());

	return (
		today.getFullYear() - birthday.getFullYear() - (hasBirthdayPassed ? 0 : 1)
	);
}

export function ScrollSections() {
	const age = calculateAge(BIRTHDAY);

	return (
		<div className="flex flex-col">
			<PageStroke
				id="profile"
				className="flex min-h-[calc(100svh-4rem)] scroll-mt-20 flex-col items-center justify-center gap-5 px-8 py-20"
			>
				<div className="relative w-48 h-48 rounded-full overflow-hidden bg-stone-200">
					<Image src={face} alt="佐藤海音" className="object-cover" priority />
				</div>
				<h1 className="text-[15px] font-normal tracking-[0.15em]">佐藤 海音</h1>
				<dl className="space-y-4 text-sm tracking-widest">
					{[
						{ label: "お誕生日", value: `2002.02.11 (${age}歳)` },
						{ label: "学位", value: "修士(理学)(新潟大学)" },
						{
							label: "現職",
							value: "サーバーサイドエンジニア\nフラー株式会社 (387A)",
						},
						{
							label: "お住まい",
							value:
								"宮城県石巻市雄勝町(生誕) → \n 岩手県一関市萩荘(高専) → \n 新潟県新潟市西区(大学・大学院) → \n千葉県柏市若柴(柏の葉)(職場から400m)",
						},
					].map((item) => (
						<div
							key={item.label}
							className="flex flex-col sm:flex-row sm:gap-8 border-b pb-4"
							style={{
								borderColor: "var(--color-b-weak)",
							}}
						>
							<dt
								className="w-32 font-bold shrink-0"
								style={{ color: "var(--color-f-shadow)" }}
							>
								{item.label}
							</dt>
							<dd className="whitespace-pre-line">{item.value}</dd>
						</div>
					))}
				</dl>
			</PageStroke>

			{SECTIONS.map((section) => (
				<PageStroke
					key={section.id}
					id={section.id}
					className="flex min-h-[calc(100svh-4rem)] scroll-mt-20 flex-col justify-center px-8 py-20"
				>
					<div className="mx-auto w-full max-w-2xl">
						<p
							className="text-xs tracking-[0.25em]"
							style={{ color: "var(--color-f-shadow)" }}
						>
							{section.title}
						</p>
						<h2 className="mt-3 text-2xl font-normal tracking-[0.18em]">
							{section.label}
						</h2>
						<p
							className="mt-4 text-sm leading-7 tracking-widest"
							style={{ color: "var(--color-f-shadow)" }}
						>
							{section.description}
						</p>
						<dl className="mt-10 space-y-4 text-sm tracking-widest">
							{section.items.map((item) => (
								<div
									key={item.label}
									className="flex flex-col sm:flex-row sm:gap-8 border-b pb-4"
									style={{
										borderColor: "var(--color-b-weak)",
									}}
								>
									<dt
										className="w-32 font-bold shrink-0"
										style={{ color: "var(--color-f-shadow)" }}
									>
										{item.label}
									</dt>
									<dd className="whitespace-pre-line">{item.value}</dd>
								</div>
							))}
						</dl>
					</div>
				</PageStroke>
			))}
		</div>
	);
}
