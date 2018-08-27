import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 625px;
  height: 270px;
  overflow: hidden;
`;

export const Img = styled.div`
  position: absolute;
  width: 2500px;
  height: 270px;
  overflow: hidden;
  transition: all 1s ease;
`;

export const Banner = styled.img`
  float: left;
  width: 625px;
  height: 270px;
`;

export const Dots = styled.div`
  position: relative;
  width: 200px;
  height: 20px;
  margin: 240px auto 0;
`;

export const DotUl = styled.div`
  width: 140px;
  height: 10px;
  margin: 0 auto;
  padding-top: 5px;
`;

export const Dot = styled.div`
  float: left;
  width: 25px;
  height: 2px;
  margin: 4px 3px 1px;
  background-color: hsla(0,0%,47%,.4);
  border-radius: 10px;
  transition: all .5s linear;
  cursor: pointer;
  &.active {
    background-color: #fff;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  top: 50%;
  left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, .6);
  transition: all .5s linear;
`;

export const RightArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  top: 50%;
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, .6);
  transition: all .5s linear;
`;
