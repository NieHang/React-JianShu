import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from 'react-redux';
import List from "./components/List";
import Recommend from "./components/Recommend";
import Slider from "./components/Slider/index";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import axios from 'axios';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Slider />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount = () => {
    const { changeHomeData } = this.props;
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      const action = {
        type: 'changeHomeData',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writer: result.writer
      }
      changeHomeData(action);
    })
  }
  
}

const mapDispatchToProps = dispatch => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null, mapDispatchToProps)(Home);