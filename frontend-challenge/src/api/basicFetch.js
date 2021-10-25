const basicFetch = async (url, endpoint) => {
  const requisition = await fetch(`${url}${endpoint}`);
  const json = await requisition.json();

  return json;
}

export default basicFetch;
