// immutable库可以让state不被修改
import { fromJS } from "immutable";
import { constants } from "./index";

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL: 
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
};
