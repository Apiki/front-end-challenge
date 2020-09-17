import instance from './instanceURL';

export async function fetchData(slug) {
  return slug ? instance.get(`posts?_embed&slug=${slug}`) : instance.get('posts?_embed&categories=518');
}

export async function fetchTotalPage(pageAtual) {
  return instance.get(`posts?_embed&categories=518&page=${pageAtual}`);
}
