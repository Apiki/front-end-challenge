// Calculate the reading time based on the amount of words of the text.

export default function calculateReadingTime(text) {
  if (typeof text !== "string") return undefined;

  const wpm = 160;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
