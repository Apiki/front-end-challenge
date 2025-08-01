function NotFoundPage() {
  return (
    <main
      role="main"
      className="min-h-screen bg-quaternary text-slate-50 flex items-center justify-center"
    >
      <section
        role="region"
        aria-labelledby="error-title"
        className="h-[518px] mx-auto w-[80%] max-w-7xl p-4 border rounded-2xl bg-dark"
      >
        <article className="flex flex-col items-center justify-center h-full p-4 text-center">
          <header>
            <h1 id="error-title" className="text-4xl font-bold mb-2">
              404
            </h1>
          </header>
          <p className="text-lg">Página não encontrada</p>
        </article>
      </section>
    </main>
  );
}

export default NotFoundPage;
