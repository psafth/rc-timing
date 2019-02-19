import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class Menu extends Component {
    render() {
        return (<div className="main-menu">
            <Link to="/" className="menu-item">
                <Icon iconName="HomeSolid" />
                Home
            </Link>
            <Link to="/settings" className="menu-item">
                <Icon iconName="Settings" />
                Settings
            </Link>
        </div>)
    }
}

export default Menu;