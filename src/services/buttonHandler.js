import getMore from "./getMore";

const buttonHandler = async () => {
  const next = await getMore();
  return next;
}

export default buttonHandler;
