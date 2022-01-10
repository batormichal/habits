import React from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import './ReadDataTable.css'


export default class ReadDateTable extends React.Component {
    static date = new Date();

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.example();
    }

    example = () => {
        RESTService.getReadingData().then(e => {
            this.setState({data: e})
        });

    }

    render() {
        return <table className="table table-striped">
            <thead>
            <tr>
                <th>Data</th>
                <th>Tytuł</th>
                <th>Typ</th>
                <th>Strony</th>
                <th>Następna</th>
                <th>Obliczone</th>
            </tr>
            </thead>
            <tbody>
            {
                this.getBooksList()
            }
            </tbody>
        </table>
    }

    getBooksList() {
        let date = new Date();
        let elements = []
        for (let i = 0; i < this.state.data.length;) {
            let e = this.state.data[i];
            let e_date = new Date(e['date'].slice(0, e['date'].indexOf(" ")))
            if (date.getDate() === e_date.getDate()) {
                while (date.getDate() === e_date.getDate()) {
                    elements.push(<TableRow e={e} key={e['_id']}/>)
                    i++;
                    if (i < this.state.data.length) {
                        e = this.state.data[i];
                        e_date = new Date(e['date'].slice(0, e['date'].indexOf(" ")))
                    }else break;
                }
            } else {
                let a = {'date': date.toISOString()}
                elements.push(<TableRow e={a} key={date.toLocaleDateString()}/>)
            }
            date.setDate(date.getDate() - 1);
        }
        return elements;
    }
}
