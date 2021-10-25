const API_URL_BASE = 'https://blog.apiki.com/';
const API_END_POINT = 'wp-json/wp/v2/'

const basicFetch = async (url, endpoint) => {
  const requisition = await fetch(`${url}${endpoint}`);
  const json = await requisition.json();

  return json;
}
