import axios from 'axios';

const API_URL = 'https://blog.apiki.com/wp-json/wp/v2/';

function formatData({
  slug, content, excerpt, title, _embedded: embedded,
}) {
  return ({
    link: slug,
    content: content.rendered,
    description: { __html: excerpt.rendered },
    title: title.rendered,
    author: embedded.author[0].name || '',
    image: embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url,
  });
}

export function getLastestPosts() {
  return axios.get(`${API_URL}posts?_embed&categories=518`).then(
    ({ data }) => data.map((dataInfo) => formatData(dataInfo)),
  ).catch(
    (message) => {
      console.log(message);
    },
  );
}

export function getNextPagePosts(page) {
  return axios.get(`${API_URL}posts?_embed&categories=518&page=${page}`).then(
    ({ data }) => data.map((dataInfo) => formatData(dataInfo)),
  ).catch(
    (message) => {
      console.log(message);
    },
  );
}
