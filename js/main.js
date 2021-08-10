let pagemax;
const fetchPosts = (url) => {
  fetch(url)
    .then((response) => {
      pagemax = response.headers.get('x-wp-totalpages');
      return response.json();
    })
    .then((data) => {
      const posts = document.getElementById('feed');
      data.forEach((post) => {
        const card = `
          <div class="card-product">
            <a href = './single.html?slug=${post.slug}'><img src= "${post._embedded['wp:featuredmedia'][0].source_url}" />
            <div class="card-product-infos">
              <h2>${post.title.rendered}</h2>
              </a>
          </div>
    </div>`;
        posts.insertAdjacentHTML('beforeend', card);
      });
    });
};
fetchPosts('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
let page = 2;
const loadButton = document.querySelector('.load_button');
loadButton.addEventListener('click', (event) => {
  event.preventDefault();
  let url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`;
  fetchPosts(url);
  page = page + 1;
  if (page >= pagemax) {
    loadButton.style.display = 'none';
  }
});
