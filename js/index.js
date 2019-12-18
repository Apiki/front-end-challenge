/* Desenvolvimento do layout que contém os cards */

const request = new XMLHttpRequest()

request.open('GET', 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518', true)
request.onload = function() {
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {
        data.forEach(item => {

            const recentPosts = document.getElementById('recent-posts')
            const container = document.getElementById('container-card')

            var a = document.createElement('a')
            a.setAttribute('class', 'card__link')
            a.href = item.link

            var card = document.createElement('div')
            card.setAttribute('class', 'card')

            var img = document.createElement('img')
            img.setAttribute('class', 'card__image')
            img.src = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url

            var cardContentText = document.createElement('div')
            cardContentText.setAttribute('class', 'card__contentText')
           
            var h2 = document.createElement('h2')
            h2.setAttribute('class', 'card__title')
            h2.innerHTML = item.title.rendered

            var p = document.createElement('p')
            p.setAttribute('class', 'card__intro')
            p.innerHTML = item.excerpt.rendered

            var label = document.createElement('label')
            label.innerHTML = ("Por ")

            var span = document.createElement('span')
            span.setAttribute('class', 'card__author')
            span.innerHTML = item._embedded.author[0].name

            recentPosts.appendChild(container)
            container.appendChild(a)
            a.appendChild(card)
            card.appendChild(img)
            card.appendChild(cardContentText)
            cardContentText.appendChild(h2)
            cardContentText.appendChild(p)
            cardContentText.appendChild(label)
            label.appendChild(span)
        });
    } else {
        console.log('Erro ao encontrar a página')
    }

}
request.send() 

/* Substituição dos dados ao clicar no botão "Próximo" */

const buttonNext = document.getElementById('button-next')
const buttonPrevious = document.getElementById('button-previous')
var page = 1

buttonNext.onclick = function() {
    request.open('GET', 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + (page + 1), true)
    request.onload = function() {
        var data = JSON.parse(this.response)

        if(request.status >= 200 && request.status < 400) {
            replaceData(data)
        } else {
            console.log('Erro ao encontrar a página')
        }
    } 
    request.send()
    page++
    window.scrollTo(0,0)
}

/* Substituição dos dados ao clicar no botão "Anterior" */

buttonPrevious.onclick = function() {
    request.open('GET', 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + (page - 1), true)
    request.onload = function() {
        var data = JSON.parse(this.response)

        if(request.status >= 200 && request.status < 400) {
            replaceData(data)
        } else {
            console.log('Erro ao encontrar a página')
        }
    } 
    request.send()
    page--
    window.scrollTo(0,0)
}

/* Função que permite a substituição de dados dos cards */

function replaceData(data) {
    for(var i = 0; i < data.length; i++) {

        var a = document.getElementsByClassName("card__link")
        for(var j = 0; j < a.length; j++){
            a[i].href = data[i].link
        }

        var img = document.getElementsByClassName("card__image")
        for(var j = 0; j < img.length; j++){
            img[i].src = data[i]._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url
        }

        var h2 = document.getElementsByClassName("card__title")
        for(var j = 0; j < h2.length; j++){
            h2[i].innerHTML = data[i].title.rendered
        }

        var p = document.getElementsByClassName("card__intro")
        for(var j = 0; j < p.length; j++){
            p[i].innerHTML = data[i].excerpt.rendered
        }

        var span = document.getElementsByClassName("card__author")
        for(var j = 0; j < span.length; j++){
            span[i].innerHTML = data[i]._embedded.author[0].name
        }
        
    }
}