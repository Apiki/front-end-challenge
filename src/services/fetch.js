import serializer from './serializers';

const DEVELOPTMENT_ENDPOINT = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=';
const CONTENT_ENDPOINT = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=';

/**
 * Find if exist a next page
 * @param {Number} page - Number of current page.
 * @param {Object} headers - the response's header.
 */
function parsePages(page, headers) {
  const maxPages = headers.get('x-wp-totalpages');
  const next = page < maxPages;
  return { maxPages, next };
}

/**
 * A function that fetch information from the blog api and return that serialized or not.
 * @param {Number} page - Page to fetch. Default is 1.
 * @param {Boolean} isSerialized - If the data must be serialized. Default is true.
 */
export async function fetchApiData(page = 1, isSerialized = true) {
  const response = await fetch(DEVELOPTMENT_ENDPOINT + page);

  let data = await response.json();
  const { next, maxPages } = parsePages(page, response.headers);
  if (isSerialized) {
    data = data.map(serializer.apiData);
  }

  return { data, next, maxPages };
}

/**
 * Fetch a content by the slug and return that content serialized or not
 * @param {String} slug - The slug of the content to fetch.
 * @param {Boolean} isSerialized - If the data must be serialized. Default is true
 */
export async function fetchContentData(slug, isSerialized = true) {
  let data = await fetch(CONTENT_ENDPOINT + slug).then((r) => r.json());

  if (isSerialized) {
    data = data.map(serializer.apiData);
  }

  return data[0];
}

export default { fetchApiData };
