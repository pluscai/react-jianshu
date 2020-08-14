import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

function App() {
  return (
    <div>
        <Provider store={store}>
            <Header />
        </Provider>

      <GlobalStyle />
      <GlobalFontStyle />
    </div>
  );
}

export default App;
