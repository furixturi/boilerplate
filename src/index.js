import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import logger from "redux-logger";

import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";

import rootReducer from './reducers/rootReducer' // Or wherever you keep your reducers
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), logger)
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
