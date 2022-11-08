async function loadArticles(page){
    console.log('Página: '+page);
    let articles_list = [];
    try{
    let baseUrl       = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page="+page;
    let fetch_url     = await fetch(baseUrl);
    let articles      = await fetch_url.json(); 
        articles_list = [{max_page:fetch_url.headers.get('X-WP-TotalPages')}];
    for(let article of articles){
    const image_url = article._embedded['wp:featuredmedia'][0]['source_url'];
    const slug      = article.slug;
    const title     = article.title.rendered;
    const date      = new Date(article.date).toLocaleString("pt-br");
    const excerpt   = article.yoast_head_json.description;
    const twitter   = article.yoast_head_json.twitter_creator;
    let article_object = {
         title,
         image_url,
         date,
         excerpt,
         slug,
         twitter
    }
    articles_list.push(article_object);
    }
    }catch(e){
     console.log(e);
    }
   // console.log(articles_list);
    return articles_list;
   }
   export default loadArticles;