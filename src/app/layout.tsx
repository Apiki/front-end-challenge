import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Blog Apiki - Conteúdo para Desenvolvedores",
  description: "Blog da Apiki com os melhores conteúdos sobre desenvolvimento web, WordPress, tecnologia e programação para desenvolvedores.",
  keywords: ["blog", "desenvolvimento", "wordpress", "tecnologia", "programação", "apiki", "web development"],
  authors: [{ name: "Apiki" }],
  creator: "Apiki",
  publisher: "Apiki",
  robots: "index, follow",
  openGraph: {
    title: "Home Blog Apiki - Conteúdo para Desenvolvedores",
    description: "Blog da Apiki com os melhores conteúdos sobre desenvolvimento web, WordPress, tecnologia e programação.",
    type: "website",
    locale: "pt_BR",
    siteName: "Blog Apiki",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Blog Apiki - Conteúdo para Desenvolvedores",
    description: "Blog da Apiki com os melhores conteúdos sobre desenvolvimento web, WordPress, tecnologia e programação.",
  },
  alternates: {
    canonical: "https://blog.apiki.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
