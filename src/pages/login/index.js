import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='请输入账号' innerRef={input => { this.account = input }} />
            <Input placeholder='请输入密码' type='password' innerRef={input => { this.password = input }} />
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'login'])
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
