import React,{Component,Fragment} from 'react';

import { Provider } from 'react-redux';

import {BrowserRouter,Route} from 'react-router-dom';

// 导入全局的样式
import {GlobalStyle} from './style';
// 导入全局的iconfont的样式
import { GlobalIconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <GlobalIconFontStyle/>
        <Provider store={store}>
          <Header/>
          <BrowserRouter>
            {/* <Route path="/" exact render={()=><div>home</div>}></Route>
            <Route path="/detail" exact render={()=><div>detail</div>}></Route> */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }
}
export default App;
