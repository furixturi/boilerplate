import React from "react";

import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import history from './helpers/history';
import Home from "./containers/Home";
import About from "./containers/About";
import Topics from "./containers/Topics";

const ConnectedSwitch = connect(state => ({
    location: state.router.location
}))(Switch);

const App = () => (
    <ConnectedRouter history={history}>
        <ConnectedSwitch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
        </ConnectedSwitch>
    </ConnectedRouter>
);

export default App;
