import React from 'react';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <GlobalFontStyle />
    </div>
  );
}

export default App;
