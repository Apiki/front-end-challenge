import { Component } from 'react';
import Card from './Card';

class CardsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        { posts.map((post) => {
          // const title = _embedded.wp:featuredmedia[0].title.rendered;
          const { _embedded, title, slug, id } = post;
          return (
            <Card
              key={id}
              title={title.rendered}
              image={_embedded.['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
              slug={slug}
            />
          );
        }) }
      </div>
    );
  }
}

export default CardsList;