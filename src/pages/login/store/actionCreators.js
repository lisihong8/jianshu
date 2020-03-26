import axios from 'axios';
import * as contants from './contants';

const changeLogin = ()=>({
  type: contants.GET_LOGIN,
  value: true
});

export const logout = ()=>({
  type: contants.GET_LOGOUT,
  value: false
});

export const getLogin = (account,password)=> {
  return (dispatch)=>{
    axios.get('http://localhost:8080/login?account='+account+'&password='+password).then((res)=>{
      console.log(res.data.data);
      const result = res.data.data;
      if(result) {
       dispatch(changeLogin());
      }else{
        alert('登录失败');
      }
     
    }).catch((error)=>{

    })
  }
}
