
import axios from 'axios';
import * as contants from './contants';

const changeDetailAction = (result)=> ({
  type: contants.GET_DETAIL_DATA,
  title: result.title,
  content: result.content
})

export const getDetailAction = ()=> {
  return (dispatch)=> {
    axios.get('http://localhost:8080/detailList').then((res)=>{
      console.log(res.data.data);
      const result = res.data.data;
      dispatch(changeDetailAction(result));
      // console.log(action);
    }).catch((error)=>{
      console.log("detailList error");
    })
  }
}
