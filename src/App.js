import React from "react";

import { connect } from "react-redux";

import { Route, Switch } from "react-router";

import Home from "./containers/Home";
import About from "./containers/About";
import Topics from "./containers/Topics";

const ConnectedSwitch = connect(state => ({
    location: state.router.location
}))(Switch);

const App = () => (
    <ConnectedSwitch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
    </ConnectedSwitch>
);

export default App;
