import React, { Component } from 'react';
import { Types } from '../../Data/Types';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

interface ITableProperties {
    duration: number;
}

interface ILap {
    passingTime: Date;
    transponderId: number;
}

interface IState {
    laps: ILap[];
}

class Table extends Component<ITableProperties, IState> {

    constructor(props?: any) {
        super(props);

        this.state = {
            laps: []
        }

        ipcRenderer.on('amb-passing', (event: any, msg: Types.IPassingMessage) => {
            this.addLap(msg);
        })
    }

    addLap(msg: Types.IPassingMessage) {

        const newLap: ILap = { passingTime: new Date(msg.passingTimeRTC || msg.passingTimeUTC || new Date()), transponderId: msg.transponderId || 1 };

        console.log("Lap", newLap);
        this.setState(prevState => ({
            laps: [...prevState.laps, newLap]
        }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.laps.map(lap => {
                    <div>{lap.passingTime} | {lap.transponderId}</div>
                })}
            </React.Fragment>
        );
    }
}

export default Table;