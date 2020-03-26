import {fromJS} from 'immutable';
import * as contants from './contants';

const defaultState = fromJS({
  title: '',
  content: ''
});

const getDetailDataMerge = (state,action)=>{
  return state.merge({
    title: action.title,
    content: action.content
  });
};

export default (state=defaultState,action)=> {
  switch(action.type) {
    case contants.GET_DETAIL_DATA:
      return getDetailDataMerge(state,action);
    default:
      return state;
  }
};
