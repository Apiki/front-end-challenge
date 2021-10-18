// Get the requried embedded post data
export default function getPostEmbeddedData(post) {
  const embedded = post._embedded;
  const featuredMedia = embedded["wp:featuredmedia"][0];
  const postImage = featuredMedia.media_details.sizes.large;

  return { embedded, featuredMedia, postImage };
}
