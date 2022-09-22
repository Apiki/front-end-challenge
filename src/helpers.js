const removeTags = (html) => {
  const data = new DOMParser().parseFromString(html, 'text/html');
  return data.body.textContent || '';
};

const getDate = (dt) => {
  const day = dt.slice(8, 10);
  const month = dt.slice(5, 7);
  const year = dt.slice(0, 4);
  const dateResult = `${day}/${month}/${year}`;
  return dateResult;
};

export { removeTags, getDate };
