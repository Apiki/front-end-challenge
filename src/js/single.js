const url = "https://blog.apiki.com/wp-json/wp/v2/posts";

const params = new URL(location.href).searchParams;
const slug = params.get('slug');

window.addEventListener('load', () => {
  function createInternal(data) {
    let post = document.createElement("div");
    post.classList.add("post__body");

    let image = document.createElement("img");
    image.classList.add("post__image");
    image.src = data._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;

    let title = document.createElement("h1");
    title.classList.add("post__title");
    title.textContent = data.title.rendered;

    let description = document.createElement("div");
    description.classList.add("post__description");
    description.innerHTML = data.excerpt.rendered;

    let content = document.createElement("div");
    content.classList.add("post__content");
    content.innerHTML = data.content.rendered;

    let author = document.createElement("p");
    author.classList.add("post__author");
    author.textContent = `Escrito por: ${data._embedded['author'][0].name}`;

    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(description);
    post.appendChild(content);
    post.appendChild(author);

    return post;
  }

  function getInterna(slug) {
    fetch(`${url}?_embed&slug=${slug}`)
    .then(response => response.json())
    .then(data => {
      let singlePage = createInternal(data[0]);
      let single = document.querySelector(".post");

      single.appendChild(singlePage);
    })
    .catch(error => console.error(error));
  }

  getInterna(slug);
});