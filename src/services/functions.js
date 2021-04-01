const returnUrl = (data) => {
  let url;
  try {
    url = data;
  } catch {
    url = null;
  }
  return url;
}

export default returnUrl;
