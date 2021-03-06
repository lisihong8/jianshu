import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const getInitList = (data)=>({
  type: constants.GET_INIT_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10),
});

export  const searchFocus = ()=> ({
  type: constants.SEARCH_FOCUS
});

export  const  searchBlur = ()=> ({
  type: constants.SEARCH_BLUR
});

export const getMouseEnter = ()=> ({
  type: constants.MOUSE_ENTER
});

export const getMouseLeave = ()=>({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page)=>({
  type:constants.CHANGE_PAGE,
  page
})

export const getList = ()=> {
  return (dispatch)=> {
    axios.get("http://localhost:8080/list")
      .then((res)=>{
        //console.log(res.data.data);
        //debugger
        const data =  res.data;
        //console.log(data);
        // const action = getInitList(data.data);
        //console.log(action);
        dispatch(getInitList(data.data));
        
      }).catch((error)=>{
        console.log("error 出错了");
      })
  }
};
