export default async function postsFetch(fetchUrl) {
  const request = await fetch(fetchUrl);
  const postList = await request.json();
  const totalPages = await request.headers.get('X-WP-TotalPages');

  return {
    postList,
    totalPages,
  };
};
