import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DesktopTab } from "@/components/desktop-tab";
import { DeviceWrapper } from "@/components/device-wrapper";
import { MobileTab } from "@/components/mobile-tab";
import { getDevice } from "@/lib/server-device";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sk-dev.org",
	),
	title: {
		default: "佐藤海音",
		template: "%s | 佐藤海音",
	},
	description: "佐藤海音のポートフォリオ",
	openGraph: {
		title: "佐藤海音",
		description: "佐藤海音のポートフォリオ",
		images: [{ url: "/face.webp", width: 1200, height: 630 }],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const device = await getDevice();
	return (
		<html
			lang="ja"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<DeviceWrapper>
					{device === "mobile" ? (
						<div
							className="flex flex-col min-h-screen"
							style={{ backgroundColor: "var(--background)" }}
						>
							<main className="flex flex-col flex-1 overflow-x-hidden pb-[calc(7.5rem+env(safe-area-inset-bottom,0px))]">
								{children}
							</main>
							<MobileTab />
						</div>
					) : (
						<div
							className="flex flex-col min-h-screen"
							style={{ backgroundColor: "var(--background)" }}
						>
							<DesktopTab />
							<main className="flex flex-col flex-1 overflow-x-hidden">
								{children}
							</main>
						</div>
					)}
				</DeviceWrapper>
			</body>
		</html>
	);
}
