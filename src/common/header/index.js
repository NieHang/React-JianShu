import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;

    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">
            <FontAwesomeIcon
              icon={faCompass}
              spin
              size="lg"
              transform="left-4"
            />
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
            <CSSTransition in={focused} timeout={500} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe60a;
            </i>
            {this.getListArea()}
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
  }

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (jsList[i] !== undefined) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={icon => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>;
    } else {
      return null;
    }
  }
}

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
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
