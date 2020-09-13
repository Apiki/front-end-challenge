import { combineReducers } from 'redux';
import articles from './blogReducer';

const rootReducer = combineReducers(
  {
    articles,
  },
);

export default rootReducer;
