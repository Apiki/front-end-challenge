import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "@/styles/CSS/app.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const source = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
});
export const viewport = {
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
};
export const metadata: Metadata = {
  metadataBase: new URL("https://blog.apiki.com"),
  title: "Blog da Apiki sobre WordPress - Blog sobre WordPress",
  description:
    "Confira conteúdos relevantes sobre tudo que precisa saber do WordPress.",

  icons: {
    icon: [
      {
        url: "https://blog.apiki.com/wp-content/uploads/sites/2/2023/05/cropped-apiki-logo-favicon-32x32.png",
        sizes: "32x32",
      },
      {
        url: "https://blog.apiki.com/wp-content/uploads/sites/2/2023/05/cropped-apiki-logo-favicon-192x192.png",
        sizes: "192x192",
      },
    ],
    apple:
      "https://blog.apiki.com/wp-content/uploads/sites/2/2023/05/cropped-apiki-logo-favicon-180x180.png",
  },

  openGraph: {
    type: "website",
    url: "https://blog.apiki.com/",
    title: "Blog da Apiki sobre WordPress - Blog sobre WordPress",
    description:
      "Confira conteúdos relevantes sobre tudo que precisa saber do WordPress.",
    siteName: "Apiki Blog",
    images: [
      {
        url: "https://blog.apiki.com/wp-content/uploads/sites/2/2023/05/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apiki Blog Banner",
      },
    ],
    locale: "pt_BR",
  },

  twitter: {
    card: "summary_large_image",
    site: "@Apiki",
    creator: "@Apiki",
    title: "Blog da Apiki sobre WordPress - Blog sobre WordPress",
    description:
      "Confira conteúdos relevantes sobre tudo que precisa saber do WordPress.",
    images: [
      "https://blog.apiki.com/wp-content/uploads/sites/2/2023/05/og-image.png",
    ],
  },

  alternates: {
    canonical: "https://blog.apiki.com/",
    languages: {
      "pt-BR": "https://blog.apiki.com/",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <meta name="apple-mobile-web-app-title" content="Apiki" />
      <body
        className={`${geist.variable} ${source.variable} geist bg-primary mx-auto`}
      >
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
