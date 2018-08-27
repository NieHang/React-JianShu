import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Slider from "./components/Slider/index";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

export default class Home extends Component {
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
}
