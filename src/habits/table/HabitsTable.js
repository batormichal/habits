import React from "react";
import RESTService from "../../RESTService";
import './HabitsTable.css'

export default class HabitsTable extends React.Component {
    constructor(props) {
        super(props);
        let endDate = new Date();
        this.state = {
            data: [],
            startDate: new Date().toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
            habits: [],
            loading: true
        }
    }

    componentDidMount() {
        this.updateData();
    }

    updateData = () => {
        let tab = []
        RESTService.getActiveHabits().then(e => this.setState({habits: e}))
        this.setState({habits: tab})
        RESTService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => this.setState({
            data: e, loading: false
        }))
    }

    getCellClass = (value) => {
        if (value === 'v') {
            return "cell-v"
        } else if (value === 'x') {
            return "cell-x"
        } else if (value === '-') {
            return "cell-neutral"
        } else if (value === ",") {
            return "cell-comma"
        } else if (value === "\\") {
            return "cell-slash";
        } else if (value === "") {
            return "cell-empty"
        }
    }

    calcDayResult = (dayResult, value) => {
        console.log(value)
        if (value === "v") dayResult += 1;
        if (value === "-") dayResult += 0.5;
        return dayResult;
    }

    render() {
        let dayResult = 0
        return <React.Fragment>
            {!this.state.loading && <table className="habits-table">
                <thead>
                <tr>
                    <th>Data</th>
                    {this.state.habits.map(e => <th key={e['name'] + 'name'}>{e['name']}</th>)}
                    <th>Result</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>STREAK</td>
                    {this.state.habits.map(e => <th key={e['name'] + "streak"}>{e['streak']}</th>)}
                    <td>RESULT</td>
                </tr>
                {this.state.data.map(date => {
                    dayResult = 0
                    return <tr key={date[0]}>
                        <td>{date[0]}</td>
                        {this.state.habits.map(value => {
                            dayResult = this.calcDayResult(dayResult, date[1][value['name']])
                            return <td key={date[0] + value['name']}
                                       className={this.getCellClass(date[1][value['name']])}>{date[1][value['name']]}</td>
                        })}
                        <td className='day-result'>{dayResult}</td>
                    </tr>
                })}</tbody>
            </table>}
            {this.state.loading && <h1>LOADING...</h1>}
        </React.Fragment>
    }
}