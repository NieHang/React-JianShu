import { connect } from "react-redux";
import React, { Component } from "react";
import { TopicWrapper, TopicItem, TopicMore } from "../style";

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map(value => (
            <TopicItem key={value.get("id")}>
              <img
                className="topic-pic"
                src={value.get("imgUrl")}
                alt={value.get("title")}
              />
              {value.get("title")}
            </TopicItem>
          ))
        }
        <TopicMore>更多热门专题 ></TopicMore>
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => ({
  topicList: state.getIn(["home", "topicList"])
});

export default connect(
  mapStateToProps,
  null
)(Topic);
