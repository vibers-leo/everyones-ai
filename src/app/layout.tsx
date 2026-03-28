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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "모두의AI",
              "url": "https://everyones-ai.vercel.app",
              "description": "누구나 AI를 활용해 게임을 만들 수 있도록 돕는 비영리 커뮤니티 플랫폼",
              "creator": {
                "@type": "Organization",
                "name": "계발자들 (Vibers)",
                "url": "https://vibers.co.kr"
              },
              "inLanguage": "ko"
            })
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7704550771011130"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CGK1BSBM63"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGK1BSBM63');
          `}
        </Script>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
