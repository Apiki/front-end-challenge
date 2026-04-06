const DEFAULT_TITLE = 'Últimas em Desenvolvimento';
const DEFAULT_DESCRIPTION =
  'Conteúdo sobre WordPress, performance, segurança e desenvolvimento moderno no ecossistema Apiki Dev.';

export function buildMetadata({ title, description } = {}) {
  return {
    title: title || DEFAULT_TITLE,
    description: description || DEFAULT_DESCRIPTION,
  };
}
