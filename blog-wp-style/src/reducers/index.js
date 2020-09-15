import { combineReducers } from 'redux';
import blog from './blogReducer';

const rootReducer = combineReducers(
  {
    blog,
  },
);

export default rootReducer;
