import '@/styles/globals.css';
import '@/styles/home.css';
import '@/styles/post.css';
import '@/styles/components/button.css';
import '@/styles/components/header.css';
import '@/styles/components/footer.css';
import '@/styles/components/post-card.css';
import '@/styles/components/posts-feed.css';
import '@/styles/components/post-hero.css';
import '@/styles/components/post-content.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: {
    default: 'Apiki Dev',
    template: '%s | Apiki Dev',
  },
  description:
    'Conteúdo sobre WordPress, performance, segurança e desenvolvimento moderno no ecossistema Apiki Dev.',
  icons: {
    icon: '/cropped-apiki-logo-favicon-180x180.webp',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1c1b1b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="apiki-dev-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
