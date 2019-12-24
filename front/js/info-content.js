function getInfo(post){

    var item = {
        title : post.title.rendered,
        excerpt : post.excerpt.rendered,
        image: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url,
        alt_image: post._embedded['wp:featuredmedia'][0].alt_text,
        link : post.link,
        slug : post.slug,
        content : post.content.rendered,
        authorName : post._embedded['author'][0].name,
        authorDescription : post._embedded['author'][0].description,
        authorImage : post._embedded['author'][0]['avatar_urls']['96'],
        date : post.date
    }

    return item;
}

function createEl(element, data, elClass){
    var el = document.createElement(element);
    el.innerHTML = data;
    el.classList.add(elClass);

    el.title = data;

    return el;
}

function createAuthorName(text, element, data, elClass){
    var el = document.createElement(element);
    el.textContent = text + data;
    el.classList.add(elClass);

    el.title = data;

    return el;
}

function createImageElement(element, data, elClass, altImg){
    var img = document.createElement(element);
    img.classList.add(elClass);

    img.src = data;
    img.alt = altImg;

    return img;
}


function createPost(post){
    var card = document.createElement("a");
    card.classList.add("post");

    var cardTitle = createEl("h3", post.title,"post-title");

    var cardIMG = createImageElement("img", post.image, "post-thumbnail", post.alt_image);
    var cardPicture = document.createElement("picture");
    cardPicture.classList.add("post-img");
    cardPicture.appendChild(cardIMG);

    card.appendChild(cardPicture);
    card.appendChild(cardTitle);

    card.title = post.title;
    card.href = "interna.html?slug=" + post.slug;

    return card;
}

function listOfPost(post){
    var i = getInfo(post);

    var areaPost = createPost(i);

    var area = document.querySelector(".card-list");

    area.appendChild(areaPost);
}

function createInterna(post){

    var i = getInfo(post);

    //titulo
    document.querySelector("#content-title").innerHTML = i.title;

    //imagem destacada
    var postIMG = createImageElement("img", i.image, "interna-thumbnail",i.alt_image);
    var imgArea = document.querySelector("#content-image");
    imgArea.appendChild(postIMG);

    //resumo
    document.getElementById("content-excerpt").innerHTML = i.excerpt;

    //data e nome do autor
    var d = new Date(i.date);

    var day = ("0" + d.getDate()).slice(-2);
    console.log(d.getMonth());
    var month = parseInt(d.getMonth()) + 1;
    var year = d.getFullYear();

    var m =  ("0" + month).slice(-2);

    var infoAutorNome = "Produzido por: " + i.authorName;
    var infoData = day + "/" + m + "/" + year;

    document.getElementById("content-publish").textContent = infoAutorNome + " | Publicado em: " + infoData;


    document.getElementById('content-article').innerHTML = i.content;


    var authorName = createAuthorName("","span", i.authorName,"nome");
    var nameAuthor = document.querySelector("#area-autor__nome");
    nameAuthor.appendChild(authorName);


    var authorIMG = createImageElement("img", i.authorImage, "autor-thumbnail","");
    var imgAuthor = document.querySelector("#area-autor__imagem");
    imgAuthor.appendChild(authorIMG);

    
    document.getElementById('area-autor__descricao').innerHTML = i.authorDescription;

}
