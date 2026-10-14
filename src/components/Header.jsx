function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo do blog */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-extrabold text-white">
            B
          </span>

          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            Blog<span className="text-blue-600">Hub</span>
          </span>
        </a>

        {/* Links de navegação */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-semibold text-gray-700 transition hover:text-blue-600"
          >
            Início
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
