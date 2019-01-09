import { combineReducers } from 'redux';
import postReducer from './postReducer';
import dataApiReducer from './dataApiReducer';

export default combineReducers({
  posts: postReducer,
  datas: dataApiReducer
});
