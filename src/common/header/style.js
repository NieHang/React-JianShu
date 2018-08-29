import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  width: 100px;
  height: 56px;
  top: 0;
  left: 0;
  background: url(${logoPic}) no-repeat;
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    color: gray;
    cursor: pointer;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  width: 260px;
  left: 20px;
  top: 56px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  &::before {
    position: absolute;
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    background-color: #fff;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  transition: color .5s ease;
  -webkit-transition: color .5s ease;
  &:hover {
    color: #333;
  }
  .spin {
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transform-origin: center center;
    -webkit-transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div``;

export const SearchInfoItem = styled.a`
  float: left;
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 210px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: width .5s ease-out;
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-exit {
    transition: width .5s ease-out;
  }
  &.slide-exit-active {
    width: 210px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  line-height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-right: 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background-color: #ec6149;
  }
`;
