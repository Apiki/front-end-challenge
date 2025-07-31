const URL = 'https://blog.apiki.com/wp-json/wp/v2/';

export const getPostsPorPag = async (page) => {
  const response = await fetch(`${URL}posts?_embed&categories=518&page=${page}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar posts da Apiki');
  }
  
  const data = await response.json();

  return data
}

export default URL;