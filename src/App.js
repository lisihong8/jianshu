import React,{Component,Fragment} from 'react';

import { Provider } from 'react-redux';

// 导入全局的样式
import {GlobalStyle} from './style';
// 导入全局的iconfont的样式
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <GlobalIconFontStyle/>
        <Provider store={store}>
          <Header/>
        </Provider>
      </Fragment>
    )
  }
}
export default App;
