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
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <GlobalIconFontStyle/>
        <Provider store={store}>
          
          <BrowserRouter>
            <div>
              <Header/>
              {/* <Route path="/" exact render={()=><div>home</div>}></Route>
              <Route path="/detail" exact render={()=><div>detail</div>}></Route> */}
            
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }
}
export default App;
