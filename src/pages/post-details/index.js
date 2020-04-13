import React from 'react';

import api from '../../services/api';
import Card from '../../components/card';

import './styles.scss';

const PostDetails = (props) => {
  const { match: { params: { slug } } } = props;
  const [postDetails, setPostDetails] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const result = await api.get('/posts', {
        params: {
          _embed: true,
          slug,
        },
      });

      const details = {
        htmlContent: result.data[0].content.rendered,
        createdDate: result.data[0].date,
        // eslint-disable-next-line no-underscore-dangle
        img: result.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url,
        modifiedDate: result.data[0].modified,
        title: result.data[0].title.rendered,
      };

      setPostDetails(details);
    })();
  }, [slug]);

  return (
    <Card
      img={postDetails.img}
      imgHeightPercentage={75}
      imgParallax
      title={postDetails.title}
      htmlContent={postDetails.htmlContent}
      createdDate={postDetails.createdDate}
      modifiedDate={postDetails.modifiedDate}
      widthPercentage={100}
      pd={true}
    />
  );
};

export default PostDetails;
