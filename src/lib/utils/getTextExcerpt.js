// Extrai um trecho inicial de algum paragráfo
export const getTextExcerpt = (content, maxLength = 150) => {
  const text = content.replace(/<[^>]*>/g, "");
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
