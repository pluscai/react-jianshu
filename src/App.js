import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </div>
            </BrowserRouter>
        </Provider>

      <GlobalStyle />
      <GlobalFontStyle />
    </div>
  );
}

export default App;
