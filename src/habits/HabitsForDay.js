import React from "react";
import RESTService from "../RESTService";
import {Card} from "./Card";
import moment from "moment";


export default class HabitsForDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            date: new Date().toISOString().split('T')[0]
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
        RESTService.putDataFromSheetToMongo().then(e => {
            console.log(e);
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
        return <div className="app">
            <div className="row">
                <div className="col-sm input-group mb-3"><span
                    className="input-group-text" id="basic-addon1">Date:</span>
                    <input className="form-control" type="date"
                           value={this.state.date}
                           onChange={this.handleDateChange}/>
                    <button className="form-control"
                            onClick={this.updateData}>Update
                    </button>
                    <button className="form-control"
                            onClick={this.synchronize}>Synchronize
                    </button>

                </div>
                <h1 className="col-sm display-4">{moment(this.state.date).format('ddd, D MMMM')}</h1>
            </div>
            {
                this.slice(this.state.data).map(slice =>
                    <div key={slice[1]['habit']} className="d-flex justify-content-center"
                    >{slice.map(e =>
                        <Card key={e.habit} setValue={this.setValue}
                              name={e.habit} value={e.data.value}
                              date={this.state.date}/>)}</div>)
            }
        </div>
    }
}
