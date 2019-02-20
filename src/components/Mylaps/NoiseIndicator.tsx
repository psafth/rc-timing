import React, { Component } from 'react';
import '../../App.css';
import { StatusMessage } from '../../../../mylaps-amb/dist/interface/IMylapsAMB';

declare global {
    interface Window {
        require: any;
    }
}

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

interface IState {
    noiseLevel?: number;
}

class NoiseIndicator extends Component<{}, IState> {

    constructor(props?: any) {
        super(props);
        this.state = { noiseLevel: 0 }

        ipcRenderer.on('amb-status', (event: any, msg: StatusMessage) => {
            this.setState({
                noiseLevel: msg.noiseLevel
            });
        })
    }

    private getColorState(value: number): string {
        if (value < 40)
            return "low";
        else if (value >= 40 && value < 60)
            return "medium";
        else
            return "high";
    }

    render() {
        return (
            <div className="NoiseIndicator" title={`Noise: ${this.state.noiseLevel}dB`}>
                <div className={`bar ${this.getColorState(this.state.noiseLevel ? this.state.noiseLevel : 0)}`} style={{ width: `${this.state.noiseLevel}%` }}></div>
            </div>
        );
    }


}

export default NoiseIndicator;