import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

const MyInnerForm = props => {
  const {
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <LoginWrapper>
        <LoginBox>
          <Input
            name="account"
            placeholder="请输入账号"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.account &&
            touched.account && <div className="warning">{errors.account}</div>}
          <Input
            name="password"
            placeholder="请输入密码"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password &&
            touched.password && (
              <div className="warning">{errors.password}</div>
            )}
          <Button type="submit" disabled={isSubmitting}>
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    </form>
  );
};

export default connect(
  null,
  null
)(
  withFormik({
    mapPropsToValues: () => ({ account: "", password: "" }),
    validationSchema: Yup.object().shape({
      account: Yup.string().required("请填写账户"),
      password: Yup.string().required("请填写密码")
    }),
    handleSubmit: (values, { props }) => {
      console.log(values);
      props.dispatch(actionCreators.login(1, 1));
    }
  })(MyInnerForm)
);
