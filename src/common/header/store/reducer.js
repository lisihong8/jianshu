import * as constants from './constants';

import { fromJS } from 'immutable';

// immutable库 facebook immutable对象

const defaultState = fromJS({
  focused: false
})

export default (state=defaultState,action)=> {
  
  if(action.type === constants.SEARCH_FOCUS) {
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.focused = true;
    // return newState;

    // 如果state里的数据是immutable对象,那么你要去改变更改state里的数据的话 你直接这样 利用immutable对象的set方法 去更改state里的数据就可以了
    // immutable对象的set方法 会结合 之前immutable对象的值 和 设置的值 ,返回一个全新的值对象
    return state.set('focused',true);

  }


  if(action.type === constants.SEARCH_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.focused = false;
    // return newState;
    return state.set('focused',false);
  }
  return state;
}
