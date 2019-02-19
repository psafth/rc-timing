import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Settings from './pages/Settings';
import Statusbar from './components/Statusbar';
import Menu from './components/Menu';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const routing = (
    <Router>
        <div className="main-container">
            <Menu />
            <Route exact path="/" component={App} key="home" />

            <Route path="/settings" component={Settings} key="settings" />

            <Statusbar />
        </div>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
