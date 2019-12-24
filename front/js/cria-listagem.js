function getPost(post){


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

function createPostElement(element, data, postClass){
    var titleH3 = document.createElement(element);
    titleH3.textContent = data;
    titleH3.classList.add(postClass);

    titleH3.title = data;

    titleH3.innerHTML;


    return titleH3;
}

function createAuthorName(texto, element, data, postClass){
    var titleH3 = document.createElement(element);
    titleH3.textContent = texto+data;
    titleH3.classList.add(postClass);

    titleH3.title = data;

    titleH3.innerHTML;

    return titleH3;
}

function createImageElement(element, data, postClass, altImg){
    var img = document.createElement(element);
    img.classList.add(postClass);

    img.src = data;
    img.alt = altImg;

    return img;
}

function createPost(post){
    var area = document.createElement("a");
    area.classList.add("post");

    var postTitle = createPostElement("h3", post.title,"post-title");
    var postIMG = createImageElement("img", post.image, "post-thumbnail",post.alt_image);

    var postPicture = document.createElement("picture");
    postPicture.classList.add("post-img");

    postPicture.appendChild(postIMG);

    area.appendChild(postPicture);
    area.appendChild(postTitle);

    area.title = post.title;
    area.href = "interna.html?slug=" + post.slug;

    return area;
}

function listOfPost(post){
    var postXHR = getPost(post);

    var areaPost = createPost(postXHR);

    var area = document.querySelector(".post-list");

    area.appendChild(areaPost);
}

function createInterna(post){

    var postXHR = getPost(post);


    var titleSection = document.querySelector("#titulo-pagina").innerHTML = postXHR.title;


    var postIMG = createImageElement("img", postXHR.image, "interna-thumbnail",postXHR.alt_image);
    var imgArea = document.querySelector("#imagem-interna");
    imgArea.appendChild(postIMG);


    document.getElementById("resumo").innerHTML = postXHR.excerpt;


    var d = new Date(postXHR.date);

    var day = ("0" + d.getDate()).slice(-2);
    console.log(d.getMonth());
    var month = parseInt(d.getMonth()) + 1;
    var year = d.getFullYear();

    var m =  ("0" + month).slice(-2);

    var producaoNome = "Produzido por: " + postXHR.authorName;
    var producaoData = day + "/" + m + "/" + year;

    document.getElementById("producao").textContent = producaoNome + " | Publicado em: " + producaoData;


    document.getElementById('area-conteudo').innerHTML = postXHR.content;


    var authorName = createAuthorName("","span", postXHR.authorName,"nome");
    var nameAuthor = document.querySelector("#area-autor__nome");
    nameAuthor.appendChild(authorName);


    var authorIMG = createImageElement("img", postXHR.authorImage, "autor-thumbnail","");
    var imgAuthor = document.querySelector("#area-autor__imagem");
    imgAuthor.appendChild(authorIMG);
    document.getElementById('area-autor__descricao').innerHTML = postXHR.authorDescription;

}
