export default async function postDetailsFetch(fetchUrl) {
  const request = await fetch(fetchUrl);
  const postDetails = await request.json();
  return postDetails;
};
