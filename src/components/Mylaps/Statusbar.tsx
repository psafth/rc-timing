import React, { Component } from 'react';
import './styles.css';
import NoiseIndicator from './NoiseIndicator';
import { StatusMessage } from '../../../../mylaps-amb/dist/interface/IMylapsAMB';
import Flash from './Flash';

declare global {
    interface Window {
        require: any;
    }
}

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;


interface IState {
    temperature?: number;
    voltage?: number;
    status: string;
}

class Statusbar extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            temperature: 0,
            voltage: 0.0,
            status: "NO_CONNECTION"
        }

        ipcRenderer.on('amb-time', (event: any, msg: any) => {
            console.log("Time", msg);
        });

        ipcRenderer.on('amb-status', (event: any, msg: StatusMessage) => {
            this.setState({
                temperature: msg.temperature,
                voltage: msg.inputVoltage,
                status: 'CONNECTED'
            });
        })

        ipcRenderer.on('amb-disconnected', (event: any, msg: any) => {
            this.setState({
                temperature: 0,
                voltage: 0,
                status: 'NO_CONNECTION'
            });
        })
    }

    render() {

        return (
            <div className="Statusbar">
                <div className="container" style={this.state.status === "CONNECTED" ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div className="item">
                        <Flash duration={500} />
                    </div>
                    <div className="item">{`${this.state.temperature} °C`}</div>
                    <div className="item">{`${this.state.voltage ? this.state.voltage.toFixed(1) : ''}V`}</div>
                    <div className="item">
                        <NoiseIndicator />
                    </div>
                </div>
                <div className="container" style={this.state.status === "NO_CONNECTION" ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <div className="item">Not connected</div>
                </div>
            </div>
        );
    }
}

export default Statusbar;