export const getReadingTime = post => {
  const readingTimeString = Object.entries(post.yoast_head_json.twitter_misc)[1][1];
  const readingTime = readingTimeString.replace(/\D/g, '');

  return readingTime;
}