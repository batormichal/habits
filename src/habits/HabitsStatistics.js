import React from "react";
import RESTService from "../RESTService";
import "./HabitsStatistics.css"


export default class HabitsStatistics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            habits: [],
            rows: []
        }
    }

    componentDidMount() {
        RESTService.getStatisticsForAllHabits().then(e => {
            this.setState({
                data: e,
                habits: Object.keys(e),
                rows: Object.keys(e[Object.keys(e)[0]])
            });
            console.log(e)
        })
    }

    render() {
        return <div>
            <table className="habits-stats-table">
                <thead>
                <tr>
                    <th/>
                    {Object.keys(this.state.data).map(e => <th>{e}</th>)}
                </tr>
                </thead>
                <tbody>
                {this.state.rows.map(row =>
                    <tr>
                        <td>{row}</td>
                        {Object.keys(this.state.data).map(e =>
                            <td>{this.state.data[e][row]}</td>)}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    }
}
