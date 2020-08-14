import React, { Component } from 'react';
import { Types } from '../../Data/Types';

interface IFlashProperties {
    duration: number;
}

interface IState {
    active: boolean;
}

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

class Flash extends Component<IFlashProperties, IState> {

    constructor(props: IFlashProperties) {
        super(props);

        this.state = {
            active: false
        };

        ipcRenderer.on('amb-passing', (event: any, msg: Types.IPassingMessage) => {
            this.setState({
                active: true
            });
        })
    }

    componentDidUpdate(prevProps: any, prevState: IState) {
        setTimeout(() => {
            if (this.state.active) {
                this.setState({ active: false });
            }
            clearTimeout();
        }, this.props.duration);
    }

    render() {
        return (
            <div>{this.state.active ? "●" : ""}</div>
        );
    }
}

export default Flash;