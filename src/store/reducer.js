// combineReducers可以将每个组件的reducer整合起来
import { combineReducers } from 'redux'
import { headerReducer } from '../common/header/store';

export default combineReducers({
  header: headerReducer
});