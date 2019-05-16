import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

interface IMenuItemProps{
    target: string;
    title: string;
    iconName: string;
}

class MenuItem extends Component<IMenuItemProps, {}> {
    render() {
            return  <Link to={this.props.target} className="menu-item">
                        <FontAwesome name={this.props.iconName} />
                        {this.props.title}
                    </Link>
    }
}

export default MenuItem;