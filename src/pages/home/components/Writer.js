import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { WriterContainer } from "../style";

class Writer extends PureComponent {
  render() {
    const { writer } = this.props;
    return (
      <WriterContainer>
        <div className="title">
          <div className="title_left">推荐作者</div>
          <div className="title_right">
            <i className="iconfont spin">&#xe851;</i>
            换一批
          </div>
        </div>
        <ul className="writer">
          {writer.map((value, index) => {
            return (
              <li key={value.get("name")}>
                <img className='myPhoto' src={value.get("imgUrl")} alt="" />
                <div className="info">
                  <div className="name">{value.get("name")}</div>
                  <div className="state">
                    写了
                    {value.get("fontNum")}字 {value.get("likeNum")}
                    喜欢
                  </div>
                </div>
                <div className="focus">+关注</div>
              </li>
            );
          })}
        </ul>
      </WriterContainer>
    );
  }
}

const mapStateToProps = state => ({
  writer: state.getIn(["home", "writer"])
});

export default connect(
  mapStateToProps,
  null
)(Writer);
