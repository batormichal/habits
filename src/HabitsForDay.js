import React from "react";
import HabitsService from "./HabitsService";


export default class HabitsForDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            date: "2021-10-11"
        }
    }


    componentDidMount() {
        this.updateData();
    }

    updateData = () => {
        HabitsService.getDataForDay(this.state.date).then(e => {
            this.setState({data: e});
        })
    }


    handleChange = (event) => {
        this.setState({date: event.target.value});
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

    getP(e) {
        let style = this.getColor(e.data.value.toLowerCase())
        return <p style={style}
                  key={e.habit}>{e.habit + "\t"}: {e.data.value}</p>
    }

    render() {
        return <div>s
            <input type="date" value={this.state.date}
                   onChange={this.handleChange}/>
            <button onClick={this.updateData}>Update</button>
            <h1>{this.state.date}</h1>
            {this.state.data.map(e => this.getP(e)
            )}
        </div>
    }
}
