
import axios from 'axios';
import * as contants from './contants';
import { fromJS } from 'immutable';

const changeHomeData = (result)=> ({
  type: contants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const getMoreArticleListAction = (result,nextPage)=> ({
  type: contants.GET_LOAD_MORE,
  list: fromJS(result.articleList),
  nextPage
});

export const getHomeInfo = ()=> {
  return (dispatch)=> {
    axios.get('http://localhost:8080/home').then((res)=> {
        //console.log(res.data.data);
        const result = res.data.data;
        dispatch(changeHomeData(result));
      }).catch((error)=> {
        console.log("哈哈哈 出错了");
      }) 
  }
};

export const getMoreListAction = (page)=> {
  return (dispatch)=> {
    //console.log('hahah');
    axios.get('http://localhost:8080/loadmore?page='+page).then((res)=>{
      //console.log(res.data.data);
      const result = res.data.data;
      dispatch(getMoreArticleListAction(result,page+1));
    }).catch((error)=>{
      console.log('阅读更多 error');
    })
  }
};

export const toggleTopShow = (show)=> ({
  type: contants.TOGGLE_TOP_SHOW,
  show
});
