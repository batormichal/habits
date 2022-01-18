import React from 'react';
import RESTService from "../RESTService";
import {GenericTable} from "./GenericTable";


export default class ExercisesTable extends React.Component {
    static date = new Date();

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        RESTService.getExercises().then(e => {
            this.setState({data: e})
        });

    }

    render() {
        return <GenericTable data={this.state.data}
                             headers={["Data", "Nazwa"]}
                             keys={["date", "type"]}/>
    }

}
