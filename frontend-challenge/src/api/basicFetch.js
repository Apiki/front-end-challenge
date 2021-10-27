const basicFetch = async (url, endpoint, page) => {
  const requisition = await fetch(`${url}${endpoint}${page}`);
  const json = await requisition.json();

  return json;
}

export default basicFetch;
