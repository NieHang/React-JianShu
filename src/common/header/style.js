import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
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
  .slide-enter {
    transition: width 1s ease-out;
  }
  .slide-enter-active {
    width: 300px;
  }
  .slide-exit {
    transition: width 1s ease-out;
  }
  .slide-exit-active {
    width: 210px;
  }
  .iconfont {
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

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
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