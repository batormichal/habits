import React from "react";
import RESTService from "../RESTService";
import {Card} from "./Card";
import moment from "moment";
import './HabitsForDay.css'


export default class HabitsForDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], date: new Date().toISOString().split('T')[0]
        }
    }


    componentDidMount() {
        this.updateData();
    }

    updateData = () => {
        RESTService.getDataForDay(this.state.date).then(e => {
            this.setState({data: e});
        })
    }


    handleDateChange = (event) => {
        this.setState({date: event.target.value});
    }

    getCard(e) {
        return <Card name={e.habit} value={e.data.value}
                     date={this.state.date}/>
    }

    synchronize = () => {
        RESTService.putDataFromSheetToMongo().then(() => {
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

    render() {
        console.log(process.env);
        return <div>
            <h1>{process.env.NODE_ENV}</h1>
            <div className="habit-day-header">
                <button className="button-1">Prev</button>
                <button className="button-1">Next</button>
                <span>Date:</span>
                <input type="date"
                       value={this.state.date}
                       onChange={this.handleDateChange}/>
                <button className="button-1"
                        onClick={this.updateData}>Update
                </button>
                <button className="button-1"
                        onClick={this.synchronize}>Synchronize
                </button>
                <span>{moment(this.state.date).format('ddd, D MMMM')}</span>
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
