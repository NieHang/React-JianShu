// combineReducers可以将每个组件的reducer整合起来
// import { combineReducers } from 'redux'
// redux-immutable中的combineReducers()方法返回的是immutable对象
import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';

export default combineReducers({
  header: headerReducer
});