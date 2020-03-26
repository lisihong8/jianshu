import React,{PureComponent} from 'react';

import { connect } from 'react-redux';

import {actionCreators} from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import img1 from './../../statics/1.jpeg';

class Home extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      img1:img1
    }
    this.handleScrollTop = this.handleScrollTop.bind(this);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollToShow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollToShow);
  }

  handleScrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={img1} alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>

        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>

        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state)=>({
  showScroll: state.getIn(['home','showScroll'])
});

const mapDispatchToProps = (dispatch)=> ({
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo()); 
    },
    changeScrollToShow(e) {
      // console.log(e);
      console.log(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
