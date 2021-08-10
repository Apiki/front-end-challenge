const fetchPost = () => {
  const title = document.getElementById('post__title');
  const content = document.getElementById('post__content');
  const image = document.getElementById('post__image');
  let slug = new URL(document.location).searchParams.get('slug');
  // https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas
  let url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      title.innerText = data[0].title.rendered;
      content.innerHTML = data[0].content.rendered;
      image.setAttribute(
        'src',
        data[0]._embedded['wp:featuredmedia'][0].source_url
      );
    });
};
fetchPost();
