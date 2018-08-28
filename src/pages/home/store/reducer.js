// immutable库可以让state不被修改
import { fromJS } from "immutable";
import { constants } from "./index";

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writer: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList,
    writer: action.writer
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.articleList),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
