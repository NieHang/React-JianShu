import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

const Header = props => {
  const { focused, handleInputFocus } = props;

  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">
          <FontAwesomeIcon icon={faCompass} spin size="lg" transform="left-4" />
          首页
        </NavItem>
        <NavItem className="left">
          <FontAwesomeIcon icon={faMobileAlt} size="lg" transform="left-4" />
          下载APP
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={1000} classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
            />
          </CSSTransition>
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe60a;</i>
        </SearchWrapper>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writing">
            <i className="iconfont">&#xe69f;</i>
            写文章
          </Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    // immutable数据是不能.的,只能用get()方法获取
    /**
     * immutable可以这么取
     * ①state.get('header').get('focused')
     * ②state.getIn(['header', 'focused'])
     * 这两种取值方式，效果相同，都是从state中取属性为header的值，
     * 再从header中取属性值为focused的值
     */
    focused: state.getIn(['header', 'focused'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
