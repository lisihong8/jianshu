import React from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators} from './store';
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
    // focused: state.header.focused
    // state里的header数据是immutable对象后,如果你要使用state里的header里的数据,你应该要调用immutable对象里的get方法去获取state里的header数据
    // focused: state.header.get('focused') 数据获取格式不统一,这样不太靠谱.state.header 这是按照js对象获取,header.get 这是按照immutable对象获取数据,所以说state.header.get('focused') 数据获取格式不统一,这样不太靠谱,这里的state是大的reducer里整合各个小的reducer里的state数据,希望大的reducer里的state也是immutable对象,应怎么办呢,这时需要安装依赖第三方模块redux-immutable.
    // focused: state.header.get('focused')

    // focused: state.get('header').get('focused') 等价于 focused: state.getIn(['header','focused'])
    focused: state.getIn(['header','focused'])
    
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    // input框聚焦时 后 要做的事情
    handleInputFocus() {
      // this.setState({
      //   focused: true
      // })
      const action =  actionCreators.searchFocus();
      dispatch(action);
    },
    // input框失焦时 后 要做的事情
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);
