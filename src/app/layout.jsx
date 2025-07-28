import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "oklch(0.7686 0.1647 70.08)",
};

export const metadata = {
  title: {
    default: "Apiki Dev Blog",
    template: "%s | Apiki Dev Blog",
  },
  description:
    "Blog de desenvolvimento da Apiki - Conteúdo técnico para desenvolvedores",
  keywords: ["wordpress", "apiki", "desenvolvimento", "developer"],
  openGraph: {
    title: "Apiki Dev Blog",
    description: "Conteúdo técnico e insights para desenvolvedores WordPress",
    url: "https://apikiblog.netlify.app/", // url alterada quando houver domínio ou através de variável de ambiente
    siteName: "Apiki Dev Blog",
    type: "website",
    images: [
      {
        url: "/logoLight.png", // caminho relativo à pasta public
        width: 500,
        height: 500,
        alt: "Logo marca da Apiki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apiki Dev Blog",
    description: "Conteúdo técnico e insights para desenvolvedores WordPress",
    images: ["/logoLight.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL("https://apikiblog.netlify.app/"), // url alterada quando houver domínio ou através de variável de ambiente
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              <main className="h-full mx-auto p-4 md:p-8 lg:p-12">
                {children}
              </main>
              <Footer />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
