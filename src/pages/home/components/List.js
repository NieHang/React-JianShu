import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <div>
        {articleList.map((value, index) => (
          <ListItem key={index}>
            <img
              className="pic"
              src={value.get("imgUrl")}
              alt=""
            />
            <ListInfo>
              <h3 className="title">{value.get("title")}</h3>
              <p className="desc">{value.get("desc")}</p>
            </ListInfo>
          </ListItem>
        ))}
        <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = dispatch => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
