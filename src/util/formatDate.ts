export function formatDate(dateToFormat: string) {
  var options: { year: "numeric"; month: "long"; day: "numeric" } = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateToFormat).toLocaleDateString("pt-br", options).split(" de ");
  const returnDate = date[0] + " de " + date[1] + ", " + date[2];
  return returnDate;
}
