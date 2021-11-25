import React from "react";
import HabitsService from "./HabitsService";


export default class HabitsForMultipleDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            startDate: "2021-10-01",
            endDate: "2021-10-11"
        }
    }


    componentDidMount() {
        this.getValues();
        this.getStats();
    }

    getValues = () => {
        HabitsService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => {
            console.log(e);
            this.setState({values: e});
        })
    }

    getStats = () => {
        HabitsService.getStatisticsForAllHabits(this.state.startDate, this.state.endDate).then(e => {
            console.log(e);
            this.setState({stats: e});
        })
    }


    handleChangeStartDate = (event) => {
        this.setState({startDate: event.target.value});
    }

    handleChangeEndDate = (event) => {
        this.setState({endDate: event.target.value});
    }

    getColor(value) {
        if (value === "x") {
            return {color: 'red'};
        }
        if (value === "v") {
            return {color: 'green'};
        } else {
            return {color: 'black'};
        }
    }

    handleNewDates = () => {
        this.getValues();
        this.getStats();
    }

    getHabitElement(e) {
        console.log(e)
        return <div>
            {e.map(d => <span style={this.getColor(d.value)}>{d.value} </span>)}
        </div>
    }

    render() {
        return <div>
            <input type="date" value={this.state.startDate}
                   onChange={this.handleChangeStartDate}/>
            <input type="date" value={this.state.endDate}
                   onChange={this.handleChangeEndDate}/>
            <button onClick={this.handleNewDates}>Update</button>
            <h1>{this.state.date}</h1>
            {Object.keys(this.state.values).map(e => <div>
                <h3>{e}</h3>
                {this.getHabitElement(this.state.values[e])}
                    <p>{this.state.stats[e]}</p>
            </div>
            )}
        </div>
    }
}
