const fetchPost = () => {
  const title = document.getElementById('post__title');
  const excerpt = document.querySelector('.post__excerpt');
  const author = document.querySelector('.post__author');
  const authorImage = document.querySelector('.post__author--image')
  const image = document.getElementById('post__image');
  const content = document.getElementById('post__content');

  let slug = new URL(document.location).searchParams.get('slug');
  let url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      title.innerText = data[0].title.rendered;
      excerpt.innerHTML = data[0].excerpt.rendered;
      author.innerText = "by " + data[0]._embedded.author[0].name;
      // authorImage.setAttribute('src', data[0]._embedded.author[0].avatar_urls.24);
      image.setAttribute('src', data[0]._embedded['wp:featuredmedia'][0].source_url);
      content.innerHTML = data[0].content.rendered;
    });
};
fetchPost();
