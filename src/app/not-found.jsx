import Link from 'next/link';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Página não encontrada',
  description: 'A página solicitada não existe ou não está mais disponível.',
});

export default function NotFoundPage() {
  return (
    <main className="page page--not-found">
      <section className="not-found container">
        <p className="not-found__eyebrow">404</p>
        <h1 className="not-found__title h1">Conteúdo não encontrado</h1>
        <p className="not-found__description">
          O post que você tentou acessar não existe ou foi removido.
        </p>
        <Link href="/" className="button button--primary">
          Voltar para a home
        </Link>
      </section>
    </main>
  );
}
