import React from "react";
import HabitsService from "../HabitsService";
import {Card} from "./Card";
import moment from "moment";


export default class HabitsForMultipleDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
        HabitsService.getDataForMultipleDays(this.state.startDate, this.state.endDate).then(e => {
            this.setState({data: e});
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
        for (let i = Object.entries(data["Warzywa"]).length - 1; i >= 0; i--) {
            let date = Object.entries(data[Object.keys(data)[0]])[i][1]['date']
            let el = <div key={"ttt---" + i}
                          className="d-flex justify-content-center">
                <p>{moment(date).format('ddd, D MMMM')}</p>
                {Object.keys(data).map(e =>
                    <Card name={e} key={e + "-" + i} setValue={function () {
                        console.log("WYSŁANO xd");
                    }}
                          value={Object.entries(data[e])[i][1]['value']}/>)
                }</div>
            tab.push(el);
        }
        return tab;
    }

    render() {
        const data = this.state.data;
        return <div>
            <div><input type="date" value={this.state.startDate}
                        onChange={this.handleChangeStartDate}/>
                <input type="date" value={this.state.endDate}
                       onChange={this.handleChangeEndDate}/>
                <button onClick={this.handleNewDates}>Update</button>
            </div>
            {this.createTable(data)}
        </div>
    }
}

