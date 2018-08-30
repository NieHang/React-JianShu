import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <div>
        {articleList.map((value, index) => (
          <Link key={index} to={`/detail/${value.get('id')}`}>
            <ListItem>
              <img className="pic" src={value.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{value.get("title")}</h3>
                <p className="desc">{value.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(["home", "articlePage"])
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
