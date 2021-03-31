import getMore from "./getMore";

const buttonHandler = async () => {
  const next = await getMore();
  console.log(next);
  return next;
}

export default buttonHandler;
