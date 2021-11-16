import axios from 'axios';

const API_URL = 'https://blog.apiki.com/wp-json/wp/v2/';

export const defaultData = {
  link: '',
  content: { __html: '' },
  description: { __html: '' },
  title: '',
  author: '',
  image: '',
};

function formatData({
  slug, content, excerpt, title, _embedded: embedded,
}) {
  return ({
    link: slug,
    content: { __html: content.rendered },
    description: { __html: excerpt.rendered },
    title: title.rendered,
    author: embedded.author[0].name || '',
    image: embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url,
  });
}

export function getLastestPosts() {
  return axios.get(`${API_URL}posts?_embed&categories=518`).then(
    ({ data }) => data.map((dataInfo) => formatData(dataInfo)),
  ).catch(
    (message) => {
      console.log(message);
      return defaultData;
    },
  );
}

export function getNextPagePosts(page) {
  return axios.get(`${API_URL}posts?_embed&categories=518&page=${page}`).then(
    ({ data }) => data.map((dataInfo) => formatData(dataInfo)),
  ).catch(
    (message) => {
      console.log(message);
      return defaultData;
    },
  );
}

export function getPost(link) {
  return axios.get(`${API_URL}posts?_embed&slug=${link}`).then(
    ({ data }) => formatData(data[0]),
  ).catch(
    (message) => {
      console.log(message);
      return defaultData;
    },
  );
}
