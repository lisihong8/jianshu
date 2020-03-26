import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="请输入账号"/>
          <Input placeholder="请输入密码"/>
          <Button>登录</Button>
        </LoginBox>
        
      </LoginWrapper>
    )
  }
};

const mapStateToProps = (state)=> ({

});

const mapDispatchToProps = (dispatch)=> ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
