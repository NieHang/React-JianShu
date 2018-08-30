// immutable库可以让state不被修改
import { fromJS } from "immutable";
import { constants } from "./index";

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
