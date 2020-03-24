import React,{Component} from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
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
      </HomeWrapper>
    )
  }
}

export default Home;
