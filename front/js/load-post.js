var xhrInterna = new XMLHttpRequest;

const params = new URL(location.href).searchParams;
const slug = params.get('slug');

console.log(slug);

xhrInterna.open("GET", "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug="+slug);

xhrInterna.addEventListener("load", function(){
    loadEvent(xhrInterna);
});
xhrInterna.send(); 

function loadEvent(x){
    if(x.status == 200){
        var resposta = x.responseText;

        var posts = JSON.parse(resposta);

        posts.forEach(function(post){
            createInterna(post);
        });
    }else{
        console.log(x.status);
        console.log(x.responseText);
    }
}


