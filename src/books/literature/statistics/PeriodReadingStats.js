import React, {useEffect, useState} from 'react';
import RESTService from "../../../RESTService";
import TableRow from "./TableRow";
import './PeriodReadingStats.css'


export const PeriodReadingStats = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RESTService.getReadingPeriodData().then(e => {
            e['weeks'] = e['weeks'].sort((a, b) => b['pages'] - a['pages'])
            setData(e);
            setLoading(false);
        });
    }, [])

    return loading ? <h2>LOADING...</h2> : <div className="tables-container">
        <table className="book-table book-stats-table">
            <thead>
            <tr>
                <th>Index</th>
                <th className="date">Koniec tygodnia</th>
                <th className="title">Stron</th>
            </tr>
            </thead>
            <tbody>
            {data['weeks'].map((e, index) => <TableRow key={e['_id'] || e['date']} e={e} index={index + 1}
                                                       format="D MMMM"/>)}
            </tbody>
        </table>
        <table className="book-table book-stats-table">
            <thead>
            <tr>
                <th>Index</th>
                <th className="date">Koniec miesiąca</th>
                <th className="title">Stron</th>
            </tr>
            </thead>
            <tbody>
            {data['months'].map((e, index) => <TableRow key={e['_id'] || e['date']} e={e} index={index + 1}
                                                        format={"MMMM"}/>)}
            </tbody>
        </table>
    </div>
}
