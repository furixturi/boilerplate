import styles from './App.scss';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleWare from 'redux-saga';

import history from '../../helpers/history';
import rootReducer from '../../reducers/rootReducer';
import rootSaga from '../../sagas/rootSaga';

import Home from '../Home';
import About from '../About';
import Topics from '../Topics';
console.log('styles', styles)
const routerMiddleWare = routerMiddleware(history);
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleWare, sagaMiddleWare, logger)
);
sagaMiddleWare.run(rootSaga);

const App = () => (
  <div className={styles.app}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  </div>
);

export default App;
