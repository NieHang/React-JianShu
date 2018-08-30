import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        {/* dangerouslySetInnerHTML用来转义标签 */}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }

  componentDidMount = () => {
    this.props.getDetail(this.props.match.params.id);
  };
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

// withRouter(Detail)意思为，detail有能力获取router中的所有内容
export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
