import React from 'react';
import { render } from 'react-dom';
import mountPoint from './utils/mountPoint';
import App from './components/App';
import GlobalStyle from './assets/globalStyle';

render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  mountPoint(),
);

module.hot.accept();
