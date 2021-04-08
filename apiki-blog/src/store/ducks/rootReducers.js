import { combineReducers } from 'redux';
import blogReducer from './blog';

const rootReducer = combineReducers({
  blogReducer,
});

export default rootReducer;
