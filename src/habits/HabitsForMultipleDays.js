import React from "react";
import RESTService from "../RESTService";
import moment from "moment";
import "./HabitsForMultipleDays.css"
import {CardTable} from "./CardTable";


export default class HabitsForMultipleDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            load: false,
            streaks: [],
            edit: false,
            startDate: "2021-12-01",
            endDate: new Date().toISOString().split('T')[0],
            date: new Date().toISOString().split('T')[0]
        }
    }


    componentDidMount() {
        this.getValues();
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
        RESTService.getHabitsStreak().then(e => {
            this.setState({streaks: e, load: true});
        })
        RESTService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => {
            this.setState({data: e});
            console.log(e);
        })
    }

    handleChangeStartDate = (event) => {
        this.setState({startDate: event.target.value});
    }

    handleChangeEndDate = (event) => {
        this.setState({endDate: event.target.value});
    }

    handleNewDates = () => {
        this.getValues();
    }

    createTable(data) {
        if (Object.keys(data).length === 0) return;
        let tab = []
        let head = <div key="streaks" className="flex-habits">
            <div
                className="display-3 stat-item date-item"/>
            {Object.keys(data).map(e => <h1
                key={e}
                className="display-3 stat-item date-item">{this.state.streaks[e]}</h1>)}
            <div
                className="display-3 stat-item date-item"/>
        </div>
        let names = <div key="streaks" className="flex-habits">
            <p
                className="stat-item date-item"/>
            {Object.keys(data).map(e => <p
                key={e}
                className="stat-item date-item">{e}</p>)}
            <p
                className="stat-item date-item"/>
        </div>
        tab.push(names);
        tab.push(head);
        let date = new Date();
        for (let i = Object.entries(data["Budzik"]).length - 1; i >= 0; i--) {
            let result = 0;
            Object.keys(data).forEach(e => {
                if (Object.entries(data[e])[i] != null) {
                    if (Object.entries(data[e])[i][1]['value'] === 'v') {
                        result++;
                    }
                    if (Object.entries(data[e])[i][1]['value'] === '-') {
                        result += 0.5;
                    }
                }
            });
            result = Math.floor(result);
            let el = <div key={"ttt---" + i}
                          className="flex-habits">
                <div
                    className="date-item">{moment(date).format('ddd, D MMMM')}</div>
                {Object.keys(data).map(e => {
                    let habitValue;
                    if (Object.entries(data[e])[i] == null) {
                        habitValue = ''
                    } else {
                        habitValue = Object.entries(data[e])[i][1]['value'];
                    }
                    return <CardTable name={e}
                                      maximal={false}
                                      edit={this.state.edit}
                                      key={e + "-" + i}
                                      setValue={function () {
                                          console.log("WYSŁANO xd");
                                      }}
                                      value={habitValue}/>
                })}
                <h1
                    className="display-3 stat-item date-item">{result}</h1>
            </div>
            tab.push(el);
            date.setDate(date.getDate() - 1)
        }
        return <div className="wrapper">{tab}</div>;
    }

    render() {
        const data = this.state.data;
        return <div>
            <div className="input-group"><input type="date"
                                                value={this.state.startDate}
                                                onChange={this.handleChangeStartDate}/>
                <input type="date" value={this.state.endDate}
                       onChange={this.handleChangeEndDate}/>
                <button className="btn btn-dark option-button"
                        onClick={this.handleNewDates}>Update
                </button>
                <button className="btn btn-dark option-button"
                        onClick={() => this.setState({edit: !this.state.edit})}>Edit
                </button>
            </div>
            {this.state.load && this.createTable(data)}
        </div>
    }
}

