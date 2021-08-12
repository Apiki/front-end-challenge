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
        <a href='./single.html?slug=${post.slug}'>
          <div class="card m-2">
            <div class="row no-gutters">
              <div class="col-md-4">
                  <img class= "postcard__img" src="${post._embedded['wp:featuredmedia'][0].source_url}" />
              </div>
              <div class="col-md-8">
                <div class="card-body postcard__infos">
                  <h2 class="postcard__h2 card-title">${post.title.rendered}</h2>
                  <p className="postcard__excerpt card-text">${post.excerpt.rendered}</p>
                </div>
              </div>
            </div>
          </div>
        </a>`;
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
