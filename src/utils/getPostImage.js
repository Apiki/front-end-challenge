export const getPostCoverImage = (post) => {
  const image = post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;

  return image;
}