import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {

  getListArea = ()=> {

    const {focused,list,mouseEnter,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
    const pageList = [];
    // 因为list是immutable数组,所以需要把list转化成普通数组才可以通过下标的形式获取到值. 
    const newList = list.toJS()
    // console.log(page,"newList");
    
    if(newList.length) {
      for(let i=(page-1)*10;i<page*10;i++) {
        //console.log(newList[i],111111111);
        if(newList[i]){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
        
      }
      // console.log(pageList,"pageList");
    }
   
    
    if(focused || mouseEnter) {
      
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch 
                onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}
              >
                <i className="icon iconfont spin" ref={(icon)=>{this.spinIcon=icon}}>&#xe851;</i> 
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>

           
              <SearchInfoList >
              {pageList}    
             </SearchInfoList>
           

          </SearchInfo>
      )
    }else {
      return null
    }
  }

  render() {
    const {login,logout,value,focused,list,handleInputFocus,handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        {/* <Logo href="/"></Logo> */}
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ? 
              <NavItem className="right" onClick={logout}>退出</NavItem> : 
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="icon iconfont">&#xe636;</i> 
          </NavItem>
  
         <SearchWrapper>
           <CSSTransition
            timeout={500}
            in={focused}
            classNames="slide"
           >
            <NavSearch 
              className={focused ? 'focused':''}
              onFocus={()=>{handleInputFocus(list)}}
              onBlur={handleInputBlur}
              value={value}
            >
            </NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused icon iconfont zoom':'icon iconfont zoom'}>&#xe62b;</i> 
  
          {this.getListArea()}
  
         </SearchWrapper>
  
        </Nav>
  
        <Addition>
          <Link to="/write">
            <Button className="writting">  <i className="icon iconfont">&#xe608;</i> 写文章</Button>
          </Link>
          
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}




const mapStateToProps = (state)=> {
  return {
    // focused: state.header.focused
    // state里的header数据是immutable对象后,如果你要使用state里的header里的数据,你应该要调用immutable对象里的get方法去获取state里的header数据
    // focused: state.header.get('focused') 数据获取格式不统一,这样不太靠谱.state.header 这是按照js对象获取,header.get 这是按照immutable对象获取数据,所以说state.header.get('focused') 数据获取格式不统一,这样不太靠谱,这里的state是大的reducer里整合各个小的reducer里的state数据,希望大的reducer里的state也是immutable对象,应怎么办呢,这时需要安装依赖第三方模块redux-immutable.
    // focused: state.header.get('focused')

    // focused: state.get('header').get('focused') 等价于 focused: state.getIn(['header','focused'])
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    mouseEnter: state.getIn(['header','mouseEnter']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])

  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    // input框聚焦时 后 要做的事情
    handleInputFocus(list) {
      console.log(list);
      // this.setState({
      //   focused: true
      // })
      // const action = actionCreators.getList();

      // if(list.length === 0) {
      //   dispatch( actionCreators.getList())
      // }
      (list.size === 0) && dispatch(actionCreators.getList());
      
      // const action = actionCreators.searchFocus();
      dispatch(actionCreators.searchFocus());
    },
    // input框失焦时 后 要做的事情
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.getMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getMouseLeave());
    },
    handleChangePage(page,totalPage,spin) {
      // console.log(page,totalPage);
      //console.log(spin);
      //console.log(spin.style.transform);
      //spin.style.transform = "rotate(360deg)";
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      // i 是 ignore case 忽略大小写
      // g 是global 匹配全局
      // transform 的值 rotate(???deg);
      // 比如 transform=rotate(150deg);首先忽略大小写 全局搜索 把那些不是0到9的数字的字符串 替换成 空字符串
      // transform='       150    
      // 如果originAngle不是空的字符串的话,就用parseInt方法把它转化成 整数,如果是空的字符串就直接让originAngle等于0
      if(originAngle) {
        originAngle = parseInt(originAngle,10);
      }else {
        originAngle = 0;
      }
      // 然后 就给这个i标签元素上的transform的rotate在原来的值的基础上增加360度
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)';

      if(page < totalPage) {
        dispatch(actionCreators.changePage(page+1));
      }else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);
