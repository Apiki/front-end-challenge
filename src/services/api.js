const API_URL =
  "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

export async function buscarPost(pagina = 1) {
  try {
    const resposta = await fetch(`${API_URL}&page=${pagina}`);

    if (!resposta.ok) {
      throw new Error("Erro ao buscar os posts");
    }

    const dados = await resposta.json();

    return dados;
  } catch (erro) {
    console.error("Erro ao buscar posts:", erro);
    throw erro;
  }
}

export async function buscarPostPorSlug(slug) {
  const resposta = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`,
  );
  if (!resposta.ok) {
    throw new Error("erro ao buscar requisição");
  }
  const dados = await resposta.json();
  return dados[0] ?? null;
}
