const url_endp = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

function connectAPI() {

}

const wrap = document.querySelector('.last-posts');

const section = document.createElement('section');
const image = document.createElement('img');
const title = document.createElement('h3');
const text = document.createTextNode('Olá mundo');

title.appendChild(text);
image.setAttribute('src', 'url');

section.appendChild(image);
section.appendChild(title);

wrap.appendChild(section);

fetch('https://blog.apiki.com/wp-json/wp/2/')
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject({
                status: res.status,
                statusText: res.url
            });
        }
    })

    .then(data => {
        console.log(data);
    })

    .catch(err => {
        console.log('erro: ', err.statusText);
    })