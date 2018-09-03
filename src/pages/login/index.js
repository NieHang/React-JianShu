import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";
import EnhancedForm from "./form";

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <EnhancedForm />
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem, passwordElem));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Login);