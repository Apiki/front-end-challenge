function LoadMoreButton({ onClick, isLoading }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? "Carregando..." : "Carregar mais artigos"}
    </button>
  );
}

export default LoadMoreButton;
