
import {fromJS} from 'immutable';
import {contants} from '../store';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  articlePage: 1
})

export default (state=defaultState,action)=> {
  switch(action.type) {
    case contants.CHANGE_HOME_DATA:
      // console.log(action);
      return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        });
    case contants.GET_LOAD_MORE:
      // return state.set('articleList',state.get('articleList').concat(action.list)).set('articlePage',action.nextPage);
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
    default:
      return state;
  }
}
