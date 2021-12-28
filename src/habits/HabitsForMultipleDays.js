import React from "react";
import HabitsService from "../HabitsService";
import {Card} from "./Card";


export default class HabitsForMultipleDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["s"],
            startDate: "2021-12-01",
            endDate: "2021-12-30",
            date: new Date().toISOString().split('T')[0]
        }
    }


    componentDidMount() {
        this.getValues();
    }

    getCard(e) {
        return <Card name={e.habit} value={e.data.value}/>
    }

    slice(array) {
        const num = 4;
        let new_array = [];
        for (let i = 0; i < array.length; i += num) {
            new_array.push(array.slice(i, i + num))
        }
        return new_array;
    }

    getValues = () => {
        HabitsService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => {
            this.parseData(e)
            this.setState({data: e});
        })
    }

    synchronize = () => {
        HabitsService.putDataFromSheetToMongo().then(e => {
            console.log(e);
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

    parseData(data) {
        let keys = Object.keys(data);
        console.log(keys);
        keys.map(e => console.log(data[e][1]['value']))
    }

    handleNewDates = () => {
        this.getValues();
    }

    render() {
        return <div>
            <input type="date" value={this.state.startDate}
                   onChange={this.handleChangeStartDate}/>
            <input type="date" value={this.state.endDate}
                   onChange={this.handleChangeEndDate}/>
            <button onClick={this.handleNewDates}>Update</button>

        </div>
    }
}
