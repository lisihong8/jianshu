import React, {Component} from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        {/* <Logo href="/"></Logo> */}
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="icon iconfont">&#xe636;</span> 
          </NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className="writting">  <span className="icon iconfont">&#xe608;</span> 写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;
