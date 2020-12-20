import '../css/reset.css'
import '../css/Cards.css'
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

class Cards extends React.Component {
  state = {
    breweries: [],
    pageNumber: 1,
    items: 15,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData();
  }
 
  


  fetchData = () => {
    axios
      .get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${this.state.pageNumber}&per_page=${this.state.items}`
      )
      .then((res) =>
        this.setState({
          breweries: [...this.state.breweries, ...res.data],
          pageNumber: this.state.pageNumber + 1,
        })
      );
  };
    
  render() {

    return (
        
        <InfiniteScroll
          dataLength={this.state.breweries.length}
          next={this.fetchData}
          hasMore={this.state.hasMore}
          className="cards"
          loader={<h4>Loading...</h4>}
                    
        >
          {this.state.breweries.map((item) => (
            <div className="cards">   
              <div className="card">
                <Link to={`/Cards/${item.slug}`}>
                  <h3 className="title">{item.title.rendered}</h3>
                  <figure>
                    <img
                      className="imageNew"
                      src={
                        item._embedded["wp:featuredmedia"][0].media_details
                          .sizes.medium.source_url
                      }
                      alt={item._embedded["wp:featuredmedia"][0].alt_text}
                    />
                  </figure>
                
                  <p className="description">
                    {item.content.rendered
                      .replace(/<[^>]+>/g, "")
                      .substr(1, 200)}
                    ...
                  </p>
                </Link>
              </div>
            </div>
          ))}
         
        </InfiniteScroll>
    );
  }
}

export default Cards;
