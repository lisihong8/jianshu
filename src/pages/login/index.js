import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';


import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const {loginState} = this.props;
    if(!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="请输入账号" ref={(input)=>this.account=input}/>
            <Input placeholder="请输入密码" type="psssword" ref={(input)=>this.password=input}/>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>     
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
};

const mapStateToProps = (state)=> ({
  loginState: state.getIn(['login','login'])
});

const mapDispatchToProps = (dispatch)=> ({
  login(accountElement,passwordElement) {
    console.log(accountElement,passwordElement);
    console.log(accountElement.value,passwordElement.value);
    dispatch(actionCreators.getLogin(accountElement.value,passwordElement.value));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
