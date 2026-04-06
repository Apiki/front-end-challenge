export default function LoadMoreButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      className="button button--primary posts-feed__button"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? 'Carregando...' : 'Carregar mais...'}
    </button>
  );
}
