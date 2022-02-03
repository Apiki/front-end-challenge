const basicFetch = async (url) => {
  const requisition = await fetch(url);
  const json = await requisition.json();
  return json;
};

export default basicFetch;
