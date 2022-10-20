const httprequest = new XMLHttpRequest();
const listaPosts = document.querySelector("#exibe-post");
const loadMore = document.querySelector(".btn-load-more");

httprequest.open("GET", "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas");
httprequest.send();


let post;
httprequest.onreadystatechange = function(){
    if(httprequest.readyState === 4 && httprequest.status === 200){
        post = JSON.parse(httprequest.response);
        exibePost();
    } 
}

function exibePost () {
    let html = "";
    post.forEach((post) => {
        //Altera h1 da página interna
        document.querySelector(".title-page").innerHTML= post.title.rendered;

        html += `<figure class="box-image-internal">
                        <img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url}" alt="${post.title.rendered}"/>
                    </figure>
                    <article>${post.content.rendered}</article>
                    <div class="author">
                        <img src="${post._embedded['author'][0].avatar_urls['96']}" alt="${post._embedded['author'][0].name}"/>
                        <div class="box-text-author">
                            <p class="name">${post._embedded['author'][0].name}</p>
                            <p class="description">${post._embedded['author'][0].description}</p>
                        </div>
                    </div>`
    });
    listaPosts.innerHTML = html;
}




