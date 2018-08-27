// immutable库可以让state不被修改
import { fromJS } from "immutable";

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writer: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "changeHomeData":
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        writer: action.writer
      });
    default:
      return state;
  }
};
