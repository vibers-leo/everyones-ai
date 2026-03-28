import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "모두의AI - 누구나 AI 게임 크리에이터",
  description: "상상이 현실이 되는 게임 세상, AI로 모두가 크리에이터가 되는 곳",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "모두의AI - 누구나 AI 게임 크리에이터",
    description: "상상이 현실이 되는 게임 세상, AI로 모두가 크리에이터가 되는 곳",
    type: "website",
    url: "https://everyones-ai.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "모두의AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "모두의AI - 누구나 AI 게임 크리에이터",
    description: "상상이 현실이 되는 게임 세상, AI로 모두가 크리에이터가 되는 곳",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7704550771011130"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
