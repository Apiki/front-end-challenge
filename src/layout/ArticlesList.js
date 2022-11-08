import Article from './Article';



function ArticlesList(props){
    return (
      props.list.map((article, index)=>{
        if(!article.title) return;
        return (
          <Article
            key           ={index}
            title         ={article.title}
            date          ={article.date}
            text          ={article.excerpt}
            image_url     = {article.image_url}
            twitter       = {article.twitter}
            slug          = {article.slug}
           />
        )
      })
  
    );
  }
  
export default ArticlesList;