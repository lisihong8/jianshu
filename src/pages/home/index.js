import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
  componentDidMount() {
    axios.get('http://localhost:8080/home').then((res)=> {
      console.log(res.data.data);
      const result = res.data.data;
      const action = {
        type:'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    }).catch((error)=> {
      console.log("哈哈哈 出错了");
    })
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

const mapDispatchToProps = (dispatch)=> ({
    changeHomeData(action) {
      dispatch(action);
    }
  })

export default connect(null,mapDispatchToProps)(Home);
