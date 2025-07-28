//Calcula o tempo estimado de leitura de um conteúdo, contando o número de palavras e assumindo uma velocidade de leitura de 200 palavras por minuto.

export const calculateReadingTime = (content) => {
  const text = content.replace(/<[^>]*>/g, "");
  const wordsPerMinute = 200;
  const words = text.split(" ").length;
  return Math.ceil(words / wordsPerMinute);
};
