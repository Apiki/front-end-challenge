const url_endp = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
var quantPages, countPage;

countPage = 1;

const wrap = document.getElementById('app');

async function connectAPI(url) {
    await fetch(url)
        .then(
            async (res) => {
                quantPages = res.headers.get('X-WP-TotalPages');
                return await res.json();
            }
        )

        .then(
            data => {
                render(data);
            }
        )
}

function render(data) {
    if(data.length > 1) {
        renderCards(data);
    } else {
        renderPost(data);
    }
}

function renderCards(data) {
    wrap.innerHTML = "";
    wrap.setAttribute('class', 'container flex flex-wrap');

    document.title = "Blog para Desenvolvedores - Apiki";

    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('Últimas postagens');

    h1.setAttribute('class', 'title');
    h1.appendChild(h1Text);
    wrap.appendChild(h1);

    data.map((item) => {
        const section = document.createElement('section');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const title = document.createElement('h3');

        let text = document.createTextNode(item.title.rendered);

        section.setAttribute('class', 'card');

        link.setAttribute('href', '#');
        link.setAttribute('slug', item.slug);
        link.setAttribute('class', 'link-slug card-link');
        
        image.setAttribute('src', item._embedded['wp:featuredmedia'][0].source_url);
        image.setAttribute('class', 'card-figure');

        title.setAttribute('class', 'card-title');
        title.appendChild(text);

        link.appendChild(image);
        link.appendChild(title);

        section.appendChild(link);
        //connectAPI(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${item.slug}`);
        
        wrap.appendChild(section);
    });

    const items = document.querySelectorAll('.link-slug');
    items.forEach((item) => {
        item.addEventListener('click', function() {
            connectAPI(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${this.getAttribute('slug')}`);
        });
    });
    prevPage();
    nextPage();
}

function renderPost(data) {
    wrap.innerHTML = "";
    console.log(data[0].title.rendered);
    document.title = data[0].title.rendered;

    const article = document.createElement('article');

    const img = document.createElement('img');
    img.setAttribute('src', data[0]._embedded['wp:featuredmedia'][0].source_url);
    
    const h1 = document.createElement('h1');
    const text = document.createTextNode(data[0].title.rendered);
    h1.appendChild(text);

    const content = document.createElement('div');
    content.innerHTML = data[0].content.rendered;

    article.appendChild(img);
    article.appendChild(h1);
    article.appendChild(content);

    wrap.appendChild(article);
}

function nextPage() {
    if(countPage < quantPages) {
        const button = document.createElement('button');
        button.innerText = "Próximo";
        button.onclick = () => {
            countPage++;
            console.log(countPage);
            connectAPI(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${countPage}`);
        }
        wrap.appendChild(button);
    }
}

function prevPage() {
    if(countPage > 1 && countPage <= quantPages) {
        const button = document.createElement('button');
        button.innerText = "Anterior";
        button.onclick = () => {
            countPage--;
            console.log(countPage);
            connectAPI(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${countPage}`);
        }
        wrap.appendChild(button);
    }
}
//const section = document.createElement('section');
//const image = document.createElement('img');
//const title = document.createElement('h3');
//const text = document.createTextNode('Olá mundo');

//title.appendChild(text);
//image.setAttribute('src', 'url');

//section.appendChild(image);
//section.appendChild(title);

//wrap.appendChild(section);

connectAPI(url_endp);