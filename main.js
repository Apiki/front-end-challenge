
fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
.then(response => response.json())
.then((data) => {
console.log(data);
console.log(data[0]._embedded['wp:featuredmedia'][0].source_url);
  const posts = document.getElementById('feed');  
  data.forEach((post) => {
    const card = `<div class="card-product">
    <img src= "${post._embedded['wp:featuredmedia'][0].source_url}" />
    <div class="card-product-infos">
      <h2>${post.title.rendered}</h2>
      <p>${post.slug}</p>
    </div>
  </div>`;
    posts.insertAdjacentHTML('beforeend', card);
  });
})
