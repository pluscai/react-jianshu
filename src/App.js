import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

function App() {
  return (
    <div>
        <Provider store={store}>
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path='/' exact render={() => <div>home</div>}></Route>
                        <Route path='/detail' exact render={() => <div>detail</div>}></Route>
                    </div>
                </BrowserRouter>
            </div>

        </Provider>

      <GlobalStyle />
      <GlobalFontStyle />
    </div>
  );
}

export default App;
