import React, {useEffect, useState} from 'react';
import RESTService from "../../../RESTService";
import TableRow from "./TableRow";
import './PeriodReadingStats.css'


export const PeriodReadingStats = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RESTService.getReadingPeriodData().then(e => {
            e = e.sort((a, b) => b['pages']-a['pages'])
            setData(e);
            setLoading(false);
        });
    }, [])

    return <div>
        {!loading && <table className="book-stats-table">
            <thead>
            <tr>
                <th>Index</th>
                <th className="date">Koniec tygodnia</th>
                <th className="title">Stron</th>
            </tr>
            </thead>
            <tbody>
            {data.map((e, index) => <TableRow key={e['_id'] || e['date']} e={e} index={index+1}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
