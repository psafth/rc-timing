import React from 'react'
import Table from '../components/Race/Table';



class RacePage extends React.Component {
    render() {
        return <div className="page race">
            <h1>Race</h1>
            <Table duration={10} />
        </div>
    }
}
export default RacePage