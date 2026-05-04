import Image from "next/image";
import type { ReactNode } from "react";
import { useId } from "react";
import { PageStroke } from "@/components/page-stroke";
import face from "@/public/face.webp";
import { SECTIONS, type SectionId } from "./sections";

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

function ProfileRow({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<div
			className="flex flex-col sm:flex-row sm:gap-8 border-b pb-4"
			style={{
				borderColor: "var(--color-b-weak)",
			}}
		>
			<dt
				className="w-32 font-bold shrink-0"
				style={{ color: "var(--color-f-shadow)" }}
			>
				{label}
			</dt>
			<dd className="whitespace-pre-line">{children}</dd>
		</div>
	);
}

function SectionFrame({
	sectionId,
	children,
}: {
	sectionId: SectionId;
	children: ReactNode;
}) {
	const section = SECTIONS.find(({ id }) => id === sectionId);

	if (!section) {
		return null;
	}

	return (
		<PageStroke
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
				<div className="mt-10 text-sm leading-7 tracking-widest">
					{children}
				</div>
			</div>
		</PageStroke>
	);
}

function CareerSection() {
	return (
		<dl className="space-y-4">
			<ProfileRow label="2017-2022">
				<p>一関高専にいた。</p>
				<p className="mt-4">
					「電気分解の際、陽極が酸化で侵され溶けていく問題を解決するために金属酸化物素材の研究をします。化学をやりたいんです。」
				</p>
				<p className="mt-4">
					と言って推薦で入った。直後の合宿でスマホをいじっている人を見つけ、話しかけたら
				</p>
				<p className="mt-4">「家サーバの管理をしている。」</p>
				<p className="mt-4">
					とのこと。いわゆる黒い画面に白い文字というやつ。スマホでやるやつがあるかね。ただ当時の私にはそんなことできるんだ！って感じで、情報・ソフトウェア系に進む。
				</p>
				<p className="mt-4">
					その後は教員の名言を管理する名言管理 API
					を作ってやんわり怒られたり、動的なライブラリ禁止の謎の Web
					開発の課題に激昂して自前で SPA を開発したり、Haskell
					に興味を持って数学力が足りなくて諦めたり色々した。
				</p>
				<p className="mt-4">あとは鬱になった。</p>
			</ProfileRow>
			<ProfileRow label="2022-2024">
				<p>
					新潟大学理学部理学科数学プログラムとかいう、いわゆる数学科にいた。
					<br />
					線型代数に微積に位相の基本に関数解析の基本未満の内容を足した知識を得た。
				</p>
				<p className="mt-4">
					私は勉強人間ではなく研究人間なので学部の間はすんげー辛かった。当然鬱が酷いことになり、中央図書館で突如涙が出てきて母親に
				</p>
				<p className="mt-4">「生きたくも死にたくもない」</p>
				<p className="mt-4">
					と電話した記憶がある。ADHD/ASD(診断が出た)、及び二次障害としての鬱・睡眠障害みたいな感じになった。この頃から精神科を元気屋さんと呼ぶようになる。使っていいよ。
				</p>
			</ProfileRow>
			<ProfileRow label="2024-2026">
				<p>
					新潟大学大学院自然科学研究科数理物質科学専攻数理科学コースとかいう、長い名前の数学科の院にいた。
					<br />
					指導教員に勧められた問題を手伝い、また似たような問題を考えて部分的に解いて修士を出る。
					<br />
					調和解析・抽象調和解析にまつわる保存問題だが、どうせ万人に一人単位でしか分からないから詳細は書かない。でも訊けば答えるよ。
					<br />
					学生生活で一番やりがいがあって楽しかった時期だ。
				</p>
				<p className="mt-4">
					また2024年の9月くらいに内定が出て、2025年5月末くらいからフラー株式会社(387A)で内定者アルバイトを始める。
					<br />
					クリーンアーキテクチャベースのモダンなアーキテクチャや、AWSのtemplate.yamlについての理解を深めた。社内のなんかを任され、作り始めた。幾つかの案件でなんかした。またフラーのデジタルノートに寄稿した。
				</p>
				<p>
					<br />
					なお、M1の時に Twitter(当時)
					で寄ってきた女性と付き合い始め同棲することになったが、秒で振られ、気が狂う。
					折角そのために勤務地を新潟から柏の葉に変えたのにね...。
					自薦他薦問わず私を可愛がってくれる方がいらっしゃったらデカい愛のほどご注入ください。
				</p>
			</ProfileRow>
			<ProfileRow label="2026-">
				フラー株式会社(387A)に26卒として新卒入社する。なんだか研修を色々とやっている。
			</ProfileRow>
		</dl>
	);
}

function HobbiesSection() {
	return (
		<dl className="space-y-4">
			<ProfileRow label="紅茶">
				緑茶も中国茶(鐵觀音など)もほうじ茶も飲むが、メインは紅茶。ダージリンならマカイバリ茶園のオータムナルかセカンドフラッシュ、あとはウバが好き。
			</ProfileRow>
			<ProfileRow label="万年筆">
				小学生時代に書き初めで KAKUNO
				を使ったのが出会い。その後高専時代に万年筆ユーザを見て再燃。KAKUNO
				はもちろん好きだし、金ペンなら Pilot Custom 742 FM の半透明緑軸
				(限定モデル。良いでしょ～)、Elabo 金属軸 M (赤) を使っている。
				また、壊れてしまったが Sailor の名月 (雪月空葉) も使っていた時期がある。
				KWZ IG Turquoise が廃盤になったのは悲しいね。
				新潟大学時代に万年筆を布教できたのはいい思い出。 私が PENBOX
				(新潟市西区小針)
				を紹介したせいで友人たちは合計数十万円溶かしていると思う。
			</ProfileRow>
			<ProfileRow label="ねこ">ねこは、好きだよ...？❤️</ProfileRow>
			<ProfileRow label="短歌">
				傑作の短歌だけ紹介していこう。テーマを絵文字で示すよ。
				<div className="mt-4 space-y-3">
					{[
						"❤️・🏥かたちなき淵にぞ映る青空の雲を眺むる君こそ知らね",
						"❤️燻らせた煙に咽ぶ朝ぼらけ留まるところを知らぬと知らば",
						"🏥衝動は潰えてもはやにべもなし俯瞰は愚かアデハデの鬱",
					].map((poem) => (
						<blockquote
							key={poem}
							className="border-l-4 px-4 py-3 leading-8"
							style={{
								backgroundColor:
									"color-mix(in srgb, var(--color-b-weak) 45%, transparent)",
								borderColor: "var(--color-b-weak)",
							}}
						>
							{poem}
						</blockquote>
					))}
				</div>
			</ProfileRow>
		</dl>
	);
}

function WorksSection() {
	return (
		<dl className="space-y-4">
			<ProfileRow label="準備中">
				ここに製作物の内容を追加していきます。
			</ProfileRow>
		</dl>
	);
}

function BlogSection() {
	return (
		<dl className="space-y-4">
			<ProfileRow label="準備中">
				ここにブログの導線を追加していきます。
			</ProfileRow>
		</dl>
	);
}

export function ScrollSections() {
	const age = calculateAge(BIRTHDAY);

	return (
		<div className="flex flex-col">
			<PageStroke
				id={useId()}
				className="flex min-h-[calc(100svh-4rem)] scroll-mt-20 flex-col items-center justify-center gap-5 px-8 py-20"
			>
				<div className="relative w-48 h-48 rounded-full overflow-hidden bg-stone-200">
					<Image src={face} alt="佐藤海音" className="object-cover" priority />
				</div>
				<h1 className="text-[15px] font-normal tracking-[0.15em]">佐藤 海音</h1>
				<dl className="space-y-4 text-sm tracking-widest">
					<ProfileRow label="お誕生日">2002.02.11 ({age}歳)</ProfileRow>
					<ProfileRow label="学位">修士(理学)(新潟大学)</ProfileRow>
					<ProfileRow label="現職">
						サーバーサイドエンジニア{"\n"}フラー株式会社 (387A)
					</ProfileRow>
					<ProfileRow label="お住まい">
						宮城県石巻市雄勝町(生誕) → {"\n"} 岩手県一関市萩荘(高専) →{"\n"}{" "}
						新潟県新潟市西区(大学・大学院) → {"\n"}
						千葉県柏市若柴(柏の葉)(オフィス近郊)
					</ProfileRow>
				</dl>
			</PageStroke>

			<SectionFrame sectionId="career">
				<CareerSection />
			</SectionFrame>
			<SectionFrame sectionId="hobbies">
				<HobbiesSection />
			</SectionFrame>
			<SectionFrame sectionId="works">
				<WorksSection />
			</SectionFrame>
			<SectionFrame sectionId="blog">
				<BlogSection />
			</SectionFrame>
		</div>
	);
}
