import posts from './posts.json';
import * as dataAPI from '../../services/getData';

export default function dataAPIMocked() {
  jest
    .spyOn(dataAPI, 'getLastestPosts')
    .mockImplementation(() => Promise.resolve(posts));
  jest
    .spyOn(dataAPI, 'getNextPagePosts')
    .mockImplementation(() => Promise.resolve(posts));
  jest
    .spyOn(dataAPI, 'getPost')
    .mockImplementation(() => Promise.resolve(posts[0]));
}
