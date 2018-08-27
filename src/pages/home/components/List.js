import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { articleList } = this.props;
    return (
      <div>
        {articleList.map((value) => (
          <ListItem key={value.get("id")}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"])
});

export default connect(
  mapStateToProps,
  null
)(List);
