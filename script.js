const url_endp = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
const wrap = document.querySelector('.last-posts');

async function connectAPI(url) {
    await fetch(url)
        .then(res => {
            res.json();
        })

        .then(data => {
            console.log(data);
        })

        .catch(err => {
            console.log('erro: ', err.statusText);
        })
}

const section = document.createElement('section');
const image = document.createElement('img');
const title = document.createElement('h3');
const text = document.createTextNode('Olá mundo');

title.appendChild(text);
image.setAttribute('src', 'url');

section.appendChild(image);
section.appendChild(title);

wrap.appendChild(section);

connectAPI(url_endp);