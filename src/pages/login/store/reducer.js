import { fromJS } from 'immutable';
import * as contants from './contants';

const defaultState = fromJS({
  login: false
});

export default (state=defaultState,action)=>{
  switch(action.type) {
    case contants.GET_LOGIN:
      return state.set('login',action.value);
    case contants.GET_LOGOUT:
      return state.set('login',action.value);
    default:
      return state;
  }
}
