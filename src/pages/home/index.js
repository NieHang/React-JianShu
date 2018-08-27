import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from 'react-redux';
import List from "./components/List";
import Recommend from "./components/Recommend";
import Slider from "./components/Slider/index";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { actionCreators } from './store';

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
    this.props.changeHomeData();
  }
  
}

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, mapDispatchToProps)(Home);