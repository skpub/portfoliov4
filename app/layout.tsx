import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DeviceWrapper } from "@/components/device-wrapper";
import { MobileShell } from "@/components/mobile-shell";
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
	title: {
		default: "佐藤海音",
		template: "%s | 佐藤海音",
	},
	description: "佐藤海音のポートフォリオ",
	openGraph: {
		title: "佐藤海音",
		description: "佐藤海音のポートフォリオ",
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
						<MobileShell>{children}</MobileShell>
					) : (
						children
					)}
				</DeviceWrapper>
			</body>
		</html>
	);
}
