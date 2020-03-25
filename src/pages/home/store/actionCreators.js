
import axios from 'axios';

import * as contants from './contants';

const changeHomeData = (result)=> ({
  type: contants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = ()=> {
  return (dispatch)=> {
    axios.get('http://localhost:8080/home').then((res)=> {
        console.log(res.data.data);
        const result = res.data.data;
        dispatch(changeHomeData(result));
      }).catch((error)=> {
        console.log("哈哈哈 出错了");
      }) 
  }
}
