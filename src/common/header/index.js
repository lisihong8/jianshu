import React from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
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

const Header = (props)=> {
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
          in={props.focused}
          classNames="slide"
         >
          <NavSearch 
            className={props.focused ? 'focused':''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
            value={props.value}
          >
          </NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'focused icon iconfont':'icon iconfont'}>&#xe62b;</i> 
       </SearchWrapper>

      </Nav>

      <Addition>
        <Button className="writting">  <i className="icon iconfont">&#xe608;</i> 写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}



const mapStateToProps = (state)=> {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    // input框聚焦时 后 要做的事情
    handleInputFocus() {
      // this.setState({
      //   focused: true
      // })
      const action = {
        type: "search_focus"
      }
      dispatch(action);
    },
    // input框失焦时 后 要做的事情
    handleInputBlur() {
      const action = {
        type: "search_blur"
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);
