export default function NotFound() {
  return (
    <main className="flex p-4 h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 - Página Não Encontrada</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A página que você está procurando não existe ou foi removida.
        </p>
      </div>
    </main>
  );
}
export const metadata = {
  title: 'Página Não Encontrada',
  description: 'A página que você está procurando não existe.',
};
