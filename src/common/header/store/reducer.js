import * as constants from './constants';

import { fromJS } from 'immutable';

// immutable库 facebook immutable对象

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state=defaultState,action)=> {

  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused',true);
    
    case constants.SEARCH_BLUR:
      return state.set('focused',false);
    
    case constants.GET_INIT_LIST:
      return state.set('list',action.data);
    

    default:
      return state;
    

  }

}
