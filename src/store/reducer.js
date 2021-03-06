// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';


import { reducer as HeaderReducer } from '../common/header/store';
import { reducer as HomeReducer } from './../pages/home/store';
import { reducer as DetailReducer } from './../pages/detail/store';
import { reducer as LoginReducer } from './../pages/login/store';

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer
});

export default reducer;

// 之前从redux引入的combineReducers方法 把各个小reducer整合成大的reducer 里的数据 是 普通的js对象,而从redux-immutable引入combineReducers方法 把各个小reducer整合成大的reducer 里的数据 是 immutable对象
