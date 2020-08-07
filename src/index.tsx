import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootStore from './store/index';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.scss';

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
