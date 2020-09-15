import { RECEIVE_API_BLOG, RECEIVE_API_ARTICLE } from '../actions/index';

const INITIAL_STATE = {};

const article = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_API_BLOG:
      return {
        ...state,
        list: action.content,
      };
    case RECEIVE_API_ARTICLE:
        return {
          ...state,
          actual: action.content,
        };
    default: return state;
  }
};

export default article;
