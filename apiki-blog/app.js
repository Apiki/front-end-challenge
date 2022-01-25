function getPostContent(url) {

    const content = new XMLHttpRequest();

        content.onload = () => {
            if( content.readystate == 4 && content.status == 200) {
                let data = JSON.parse(content.responseText)   
                document.getElementById('content').innerHTML = data
            }

        }





    content.open("GET", url);
    content.send();

    
    


}

getPostContent('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
