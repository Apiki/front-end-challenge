function MoreArticles(props){
   
 

    return (
    
      <div className="loadMore">
      <button className="btn" onClick={props.onClick}>
          Carregar mais...
      </button>
      </div>
    );
  }

  export default MoreArticles;