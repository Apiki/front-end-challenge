export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  const dataObj = {
    data: data,
    totalPages: response.headers.get('X-WP-TotalPages')
  };
  return dataObj;
}
