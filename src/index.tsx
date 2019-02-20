import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Statusbar from './components/Mylaps/Statusbar';
import Menu from './components/Menu/Menu';

import { initializeIcons } from '@uifabric/icons';
import RacePage from './pages/Race';
import SettingsPage from './pages/Settings';

initializeIcons();

const routing = (
    <Router>
        <div className="main-container">
            <Menu />
            <Route exact path="/" component={App} key="home" />
            <Route exact path="/race" component={RacePage} key="race" />
            <Route path="/settings" component={SettingsPage} key="settings" />
            <Statusbar />
        </div>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
