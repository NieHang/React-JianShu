import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Slider from "./components/Slider/index";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { actionCreators } from "./store";

// PureComponent代替了shouldComponentUpdate的作用
// PureComponent最好和immutable一起使用
// 只用PureComponent而不用immutable的话，会有一些意想不到的坑
class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;
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
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount = () => {
    this.props.changeHomeData();
    this.bindEvents();
  };

  componentWillUnmount() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatchToProps
)(Home);