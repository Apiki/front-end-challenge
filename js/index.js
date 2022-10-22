const httprequest = new XMLHttpRequest();
const listaPosts = document.querySelector("#lista-posts");

httprequest.open("GET", "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
httprequest.send();

let posts;
httprequest.onreadystatechange = function() {
	if (httprequest.readyState === 4 && httprequest.status === 200) {
		posts = JSON.parse(httprequest.response);
		exibePosts();
	}
}

function exibePosts() {
	let html = "";
	posts.forEach((post) => {
		html += `<a href="single.html?slug=${post.slug}" title="${post.title.rendered}">
                    <figure class="box-item-blog">
                        <img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url}" alt="${post.title.rendered}"/>
                        <figcaption>
                            <h2>${post.title.rendered}</h2>
                            <p><i class="fa-solid fa-user"></i>  By: ${post._embedded['author'][0].name}</p>
                            <p>${post.excerpt.rendered}</p>
                        </figcaption>
                    </figure>
                </a>`
	});
    
	listaPosts.innerHTML += html;
}

const btCarregarMais = document.querySelector("#load-more");
btCarregarMais.addEventListener("click", carregarMais);

let page = 1

function carregarMais() {
	httprequest.open('GET', 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + (page + 1), true)
	httprequest.onload = function() {

		if (httprequest.status === 200 && httprequest.status === 400) {
			exibePosts();
		}
	}
	httprequest.send()
	page++
}


