import { RECEIVE_API_BLOG } from '../actions/index';

const INITIAL_STATE = {};

const articles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_API_BLOG:
      return {
        ...state,
        list: action.content,
      };
    default: return state;
  }
};

export default articles;
