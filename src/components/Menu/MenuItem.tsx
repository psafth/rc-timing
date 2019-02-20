import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

interface IMenuItemProps{
    target: string;
    title: string;
    iconName: string;
}

class MenuItem extends Component<IMenuItemProps, {}> {
    render() {
            return  <Link to={this.props.target} className="menu-item">
                        <Icon iconName={this.props.iconName} />
                        {this.props.title}
                    </Link>
    }
}

export default MenuItem;