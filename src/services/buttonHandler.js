import getMore from "./getMore";

const list = document.getElementsByClassName('main-page-load-more');

const buttonHandler = async () => {
  list[0].style.display = 'none';
  const next = await getMore();
  list[0].style.display = 'flex';
  return next;
}

export default buttonHandler;
