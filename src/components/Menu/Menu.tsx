import React, { Component } from 'react';
import './styles.css';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        return (<div className="main-menu">
            <MenuItem title="Home" target="/" iconName="hdd" />
            <MenuItem title="Race" target="/race" iconName="flag-checkered" />
            <MenuItem title="Settings" target="/settings" iconName="desktop" />
        </div>)
    }
}

export default Menu;