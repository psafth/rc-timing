import React, { Component } from 'react';
import '../../App.css';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        return (<div className="main-menu">
            <MenuItem title="Home" target="/" iconName="HomeSolid" />
            <MenuItem title="Race" target="/race" iconName="HomeSolid" />
            <MenuItem title="Settings" target="/settings" iconName="Settings" />
        </div>)
    }
}

export default Menu;