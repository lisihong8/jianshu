import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  // input框聚焦时 后 要做的事情
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  // input框失焦时 后 要做的事情
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
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
            <i className="icon iconfont">&#xe636;</i> 
          </NavItem>

         <SearchWrapper>
           <CSSTransition
            timeout={500}
            in={this.state.focused}
            classNames="slide"
           >
            <NavSearch 
              className={this.state.focused ? 'focused':''}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i className={this.state.focused ? 'focused icon iconfont':'icon iconfont'}>&#xe62b;</i> 
         </SearchWrapper>

        </Nav>

        <Addition>
          <Button className="writting">  <i className="icon iconfont">&#xe608;</i> 写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;
