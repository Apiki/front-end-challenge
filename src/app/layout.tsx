import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/header';
import './globals.css';

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Apiki DevBlog - Desenvolvimento WordPress',
  description: 'O Blog da Apiki para desenvolvedores',
  keywords: [
    'Apiki',
    'Desenvolvimento WordPress',
    'Blog de Desenvolvimento',
    'Artigos WordPress',
    'Dicas de Desenvolvimento',
  ],
  authors: [{ name: 'Apiki', url: 'https://apiki.com' }],
  creator: 'Apiki',
  publisher: 'Apiki',
  openGraph: {
    title: 'Apiki DevBlog',
    description: 'O Blog da Apiki para desenvolvedores',
    siteName: 'Apiki DevBlog',
    images: [
      {
        url: 'https://blog.apiki.com/wp-content/uploads/sites/2/2023/08/Desenvolvimento-1.png',
        alt: 'Apiki DevBlog',
      },
    ],
    locale: 'pt-BR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apiki DevBlog',
    description: 'O Blog da Apiki para desenvolvedores',
    images: ['https://blog.apiki.com/wp-content/uploads/sites/2/2023/08/Desenvolvimento-1.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.style} antialiased dark bg-slate-950`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
