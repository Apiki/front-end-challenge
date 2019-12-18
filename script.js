const url_endp = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const wrap = document.querySelector('.last-posts');

async function connectAPI(url) {
    await fetch(url)
        .then(
            async (res) => {
                return await res.json();
            }
        )

        .then(
            data => {
                data.map((item) => {
                    const section = document.createElement('section');
                    const image = document.createElement('img');
                    const title = document.createElement('h3');
                    let text = document.createTextNode(item.title.rendered);

                    image.setAttribute('src', item._embedded['wp:featuredmedia'][0].source_url);
                    title.appendChild(text);

                    section.appendChild(image);
                    section.appendChild(title);
                    wrap.appendChild(section);
                });
            }
        )
}

function generateCards(data) {

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