var xhr = new XMLHttpRequest;

xhr.open("GET", "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");

xhr.addEventListener("load", function(){
    loadEvent(xhr);
});
xhr.send();


var button = document.querySelector("#load-more");

var requestNum = 2;

button.addEventListener("click", function(){

    var x = new XMLHttpRequest;
    var url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page="+requestNum;
    x.open("GET", url, true);
    var button = document.querySelector(".fa");

    x.addEventListener("load", function(){
        loadEvent(x);


        button.classList.remove("no-button");
    });


    button.classList.add("no-button");
    requestNum++;
    x.send();

});

function loadEvent(x){
    if(x.status == 200){
        var resposta = x.responseText;

        var posts = JSON.parse(resposta);

        posts.forEach(function(post){
            listOfPost(post);
        });
    }else{
        console.log(x.status);
        console.log(x.responseText);
    }
}
