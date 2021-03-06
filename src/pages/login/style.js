import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  .warning {
    width: 150px;
    margin-left: 100px;
    color: gray;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  margin: 10px auto;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
`;