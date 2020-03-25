import React,{Component} from 'react';

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

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      img1:img1
    }
    this.handleScrollTop = this.handleScrollTop.bind(this);
  }

  componentDidMount() {
    this.props.changeHomeData();
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
        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch)=> ({
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());

      
    }
  })

export default connect(null,mapDispatchToProps)(Home);
