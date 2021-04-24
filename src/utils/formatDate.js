export function fromatDate(date) {
  const dateFormated = new Date(date).toLocaleString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return dateFormated;
}
