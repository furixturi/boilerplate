import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import logger from "redux-logger";

import { routerMiddleware } from "react-router-redux";

import rootReducer from './reducers/rootReducer';
import history from './helpers/history';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), logger)
);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
