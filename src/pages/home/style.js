import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 1px auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  margin-right: 18px;
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-right: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
  cursor: pointer;
  .topic-pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #787878;
  cursor: pointer;
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendList = styled.div`
  width: 280px;
  padding-top: 30px;
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const Download = styled.div`
  position: relative;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 83%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
  .hiddenCode {
    position: absolute;
    opacity: 0;
    width: 180px;
    height: 180px;
    padding: 10px;
    box-sizing: border-box;
    top: -190px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #50eace;
    background-color: #fff;
    border: 1px solid #eee;
    transition: all .2s linear;
    border-radius: 5px;
    img {
      width: 160px;
      height: 160px;
    }
    .arrow {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: #fff;
      left: 50%;
      bottom: -8px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      transform: translate(-50%) rotate(45deg);
    }
  }
  .info:hover+.hiddenCode {
    opacity: 1;
    transition: all .2s linear;
  }
`;

export const WriterContainer = styled.div`
  width: 280px;
  .title {
    width: 100%;
    overflow: hidden;
    color: #969696;
    font-size: 14px;
    &_left {
      float: left;
    }
    &_right {
      float: right;
      cursor: pointer;
    }
  }
  .writer {
    text-align: left;
    li {
      margin-top: 15px;
      .myPhoto {
        width: 48px;
        height: 48px;
        border: 1px solid #eee;
        padding: 1px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        .name {
          font-size: 14px;
          margin-bottom: 7px;
        }
        .state {
          font-size: 12px;
          color: #969696;
          margin-top: 2px;
        }
      }
      .focus {
        float: right;
        font-size: 13px;
        color: #42c02e;
        margin-top: 8px;
        cursor: pointer;
      }
    }
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background-color: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;