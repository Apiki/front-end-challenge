const url = "https://blog.apiki.com/wp-json/wp/v2/posts";

window.addEventListener('load', () => {
  //para utilizar no carregamento de mais páginas
  var totalPages = 0; 
  
  //Criar arquitetura dos posts e pegar informações dos 10 primeiros
  function createCard(itemInfosCard) {
    let card = document.createElement("div");
    card.classList.add("blog__card");
  
    let boxImage = document.createElement("div");
    boxImage.classList.add("blog__image");
  
    let linkImage = document.createElement("a");
    linkImage.href = "single.html?slug=" + itemInfosCard.slug;
  
    let image = document.createElement("img");
    image.src = itemInfosCard._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
  
    let content = document.createElement("div");
    content.classList.add("blog__content");
  
    let linkTitle = document.createElement("a");
    linkTitle.href = "single.html?slug=" + itemInfosCard.slug;
  
    let title = document.createElement("h2");
    title.classList.add("blog__title");
    title.textContent = itemInfosCard.title.rendered
  
    let description = document.createElement("div");
    description.classList.add("blog__description");
    description.innerHTML = itemInfosCard.excerpt.rendered
  
    linkImage.appendChild(image);
    boxImage.appendChild(linkImage);
    card.appendChild(boxImage);
    linkTitle.appendChild(title);
    content.appendChild(linkTitle);
    content.appendChild(description);
    card.appendChild(content);
  
    return card
  }
  
  async function getPost() {
    await fetch(`${url}/?_embed&categories=518`)
    .then(
      async (response) => {
        totalPages = response.headers.get('X-WP-TotalPages')
        return await response.json()
      })
    .then(data => {
      data.forEach(function(itemInfosCard){
        let areaPosts = createCard(itemInfosCard)
        let posts = document.querySelector(".blog__posts");
  
        posts.appendChild(areaPosts);
        
      });
    })
    .catch(error => console.error(error));
  }
  
  //Carregar mais posts
  let buttonLoad = document.querySelector("#loading");
  var numPage = 2;
  
  buttonLoad.addEventListener("click", async function () {
    if(numPage <= totalPages) {
      buttonLoad.textContent = 'Carregando...';
  
      await fetch(`${url}/?_embed&categories=518&page=${numPage}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(function(itemInfosCard){
          let areaPosts = createCard(itemInfosCard);
          let posts = document.querySelector(".blog__posts");
  
          posts.appendChild(areaPosts);
        });
      })
      .catch(error => console.error(error));
  
      buttonLoad.textContent = 'Carregar mais posts';
    } 
  
    if (numPage >= totalPages) {
      buttonLoad.classList.add("button__removed");
    }
  
    numPage++;
  });

  getPost();
});  
