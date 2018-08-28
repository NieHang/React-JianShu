import axios from "axios";
import { constants } from './index';
import { fromJS } from 'immutable';

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writer: result.writer
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  articleList: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (articlePage) => {
  return dispatch => {
    axios.get(`/api/homeList.json?page=${articlePage}`).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, articlePage + 1));
    });
  }
}

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});