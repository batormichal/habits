import React from 'react';
import HabitsService from "../HabitsService";
import moment from "moment";


export default class ReadDateTable extends React.Component {
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
        HabitsService.getReadingData().then(e => {
            this.setState({data: e})
        });
    }

    render() {
        return <table className="table table-striped">
            <thead>
                <th>Data</th>
                <th>Tytuł</th>
                <th>Typ</th>
                <th>Strony</th>
                <th>Następna</th>
            </thead>
            {
                this.state.data.map(e => <tr key={e["_id"]}>
                    <th className="row">{moment(e['date']).format('ddd, D MMMM')}</th>
                    <td>{e['title']}</td>
                    <td>{e['type']}</td>
                    <td>{e['pages']}</td>
                    <td>{e['next_page']}</td>
                </tr>)
            }
        </table>
    }
}
