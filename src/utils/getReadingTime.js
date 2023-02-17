export const getReadingTime = post => {
  const readingTimeString = post.yoast_head_json.twitter_misc['Est. tempo de leitura'];
  const isReadingTimeExist = Object.hasOwn(post.yoast_head_json.twitter_misc,'Est. tempo de leitura');
  const readingTime = isReadingTimeExist ? readingTimeString.replace(/\D/g, '') : 'alguns';

  return readingTime;
}