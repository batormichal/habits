import React from "react";
import RESTService from "../RESTService";
import {Card} from "./Card";
import './HabitsForDay.css'


export default class HabitsForDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], date: new Date().toISOString().split('T')[0]
        }
    }


    componentDidMount() {
        RESTService.getDataForDay(this.state.date).then(e => {
            this.setState({data: e});
        })
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value});
        RESTService.getDataForDay(event.target.value).then(e => {
            this.setState({data: e});
        })
    }

    getCard(e) {
        return <Card name={e.habit} value={e.data.value}
                     date={this.state.date}/>
    }

    sheetToMongo = () => {
        let date = new Date();
        date.setDate(date.getDate() - 5);
        RESTService.putDataFromSheetToMongo(date.toISOString().split('T')[0]).then(() => {
            this.updateData();
        })
    }

    mongoToSheet = () => {
        RESTService.putDataFromMongoToSheet(this.state.date).then(() => {
            this.updateData();
        })
    }

    slice(array) {
        const num = 4;
        let new_array = [];
        for (let i = 0; i < array.length; i += num) {
            new_array.push(array.slice(i, i + num))
        }
        return new_array;
    }

    setValue = (name, date, new_value) => {
        RESTService.setValueForHabitAndDate(name, date, new_value)
            .then(e => {
                console.log(e);
                this.updateData()
            })
    }

    dayButton = (value) => {
        console.log("Change date: " + value);
        let date_o = new Date(this.state.date);
        date_o.setDate(date_o.getDate() + value);
        let new_date = date_o.toISOString().split('T')[0];
        this.setState({date: new_date})
        RESTService.getDataForDay(new_date).then(e => {
            this.setState({data: e});
        })
    }

    updateData = () => {
        RESTService.getDataForDay(this.state.date).then(e => {
            this.setState({data: e});
        })
    }

    render() {
        return <div>
            <div className="habit-day-header">
                <button className="button-1"
                        onClick={() => this.dayButton(-1)}>Prev
                </button>
                <button className="button-1"
                        onClick={() => this.dayButton(1)}>Next
                </button>
                <span>Date:</span>
                <input type="date"
                       value={this.state.date}
                       onChange={this.handleDateChange}/>
                <button className="button-1"
                        onClick={this.mongoToSheet}>Push data
                </button>
                <button className="button-1"
                        onClick={this.sheetToMongo}>Pull data
                </button>
            </div>
            {this.slice(this.state.data).map(slice => <div
                className="habit-day-card"
                key={slice[0]['habit']}>
                {slice.map(e => <Card key={e.habit} maximal={true}
                                      setValue={this.setValue}
                                      name={e.habit} value={e.data.value}
                                      date={this.state.date}/>)}</div>)}
        </div>
    }
}
