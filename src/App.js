import React,{Component,Fragment} from 'react';
// 导入全局的样式
import {GlobalStyle} from './style';
// 导入全局的iconfont的样式
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <GlobalIconFontStyle/>
        <Header/>
      </Fragment>
    )
  }
}
export default App;
