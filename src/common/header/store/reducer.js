import { constants } from '../store';
// immutable库可以让state不被修改
import { fromJS } from 'immutable';

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state;
};