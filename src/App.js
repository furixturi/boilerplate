import React from "react";

import { createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";

import logger from "redux-logger";

import { Route, Switch } from "react-router";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import history from './helpers/history';

import rootReducer from "./reducers/rootReducer";

import Home from "./containers/Home";
import About from "./containers/About";
import Topics from "./containers/Topics";

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), logger)
);

const ConnectedSwitch = connect(state => ({
    location: state.router.location
}))(Switch);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </ConnectedSwitch>
    </ConnectedRouter>
  </Provider>
);

export default App;
