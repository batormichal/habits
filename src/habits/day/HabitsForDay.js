import React from "react";
import RESTService from "../../RESTService";
import {Card} from "./Card";
import './HabitsForDay.css'


export default class HabitsForDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], date: new Date().toISOString().split('T')[0], result: 0, category: 'normal', loading: true
        }
    }


    componentDidMount() {
        this.updateData(this.props.type);
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value});
        this.updateData();
    }

    sheetToPostgres = () => {
        RESTService.putDataFromSheetToPostgres(this.state.date).then(() => {
            this.updateData();
        })
    }

    postgresToSheet = () => {
        RESTService.putDataFromPostgresToSheet(this.state.date).then(() => {
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

    setValue = (name, date, new_value, id) => {
        RESTService.setValueForHabitAndDate(name, date, new_value, id)
            .then(e => {
                console.log(e);
                this.updateData()
            })
    }

    dayButton = (value) => {
        this.setState({loading: true})
        console.log("Change date: " + value);
        let date_o = new Date(this.state.date);
        date_o.setDate(date_o.getDate() + value);
        let new_date = date_o.toISOString().split('T')[0];
        this.setState({date: new_date})
        if (this.props.type === "small") {
            console.log(("Małe"))
        } else {
            RESTService.getDataForDay(new_date).then(e => {
                this.setState({data: e});
                this.calculateResult();
                this.setState({loading: false})
            })
        }
    }

    updateData = (category) => {
        this.setState({loading: true})
        category === "small" ? RESTService.getSmallDataForDay(this.state.date).then(e => {
            this.setState({data: e});
            this.calculateResult();
            this.setState({loading: false})
        }) : RESTService.getDataForDay(this.state.date).then(e => {
            this.setState({data: e});
            this.calculateResult();
            this.setState({loading: false})
        })
    }

    calculateResult = () => {
        this.setState({
            result: this.state.data.filter(x => x.value === "v").length + this.state.data.filter(x => x.value === "-").length / 2
        })
    }

    updateDataCategory = (category) => {
        this.updateData(category)
    }

    render() {
        return <div>
            {this.state.loading && <h2>LOADING</h2>}
            <div>
                <div className="habit-day-header">
                    <div>
                        <button
                            className={this.state.category === "normal" ? "button-1 button-selected" : "button-1"}
                            onClick={() => {
                                this.setState({category: "normal"})
                                this.updateDataCategory("normal");
                            }}>Normal
                        </button>
                        <button
                            className={this.state.category === "small" ? "button-1 button-selected" : "button-1"}
                            onClick={() => {
                                this.setState({category: "small"})
                                this.updateDataCategory("small");
                            }}>Small
                        </button>
                    </div>
                    <div>
                        <button className="button-1"
                                onClick={() => this.dayButton(-1)}>Previous
                        </button>
                        <button className="button-1"
                                onClick={() => this.dayButton(1)}>Next
                        </button>
                    </div>
                    <p>Date:</p>
                    <input type="date"
                           value={this.state.date}
                           onChange={this.handleDateChange}/>
                    <div>
                        <button className="button-1"
                                onClick={this.postgresToSheet}>Push data
                        </button>
                        <button className="button-1"
                                onClick={this.sheetToPostgres}>Pull data
                        </button>
                    </div>
                    <span className="result"><span>Result: </span><span>{this.state.result}</span></span>
                </div>
                {this.slice(this.state.data).map(slice => <div
                    className="habit-day-card"
                    key={slice[0]['habit']}>
                    {slice.map(e => <Card key={e.habit + e.id} maximal={true}
                                          setValue={this.setValue}
                                          name={e.habit} value={e.value}
                                          date={this.state.date} id={e.id}/>)}</div>)}</div>
        </div>
    }
}