import React from "react";
import RESTService from "../../RESTService";

export default class HabitsTable extends React.Component {
    constructor(props) {
        super(props);
        let endDate = new Date();
        endDate = endDate.setDate(endDate.getDate() - 10);
        this.state = {
            data: [], startDate: new Date().toISOString().split('T')[0], endDate: endDate, habits: []
        }
    }

    componentDidMount() {
        this.updateData();
    }

    updateData = () => {
        let tab = []
        RESTService.getActiveHabits().then(e => e.map(l => tab.push(l['name'])))
        this.setState({habits: tab})
        RESTService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => this.setState({data: e}))
    }

    render() {
        return <table>
            <thead>
            <tr>
                <th>Data</th>
                {this.state.habits.map(e => <th>{e}</th>)}
            </tr>
            </thead>
            <tbody>
            {this.state.data.map(date => <tr>
                <td>{date[0]}</td>
                {this.state.habits.map(value => <td>{date[1][value]}</td>)}</tr>)}</tbody>
        </table>
    }
}