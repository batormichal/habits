import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import '../books/ReadDataTable.css'


export const ReadingDataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RESTService.getAllReadingData().then(e => {
            setData(e);
            setLoading(false);
        });
    }, [])

    return <div>
        {!loading && <table className="book-table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Kod</th>
                <th className="title">Tytuł</th>
                <th>Strony</th>
            </tr>
            </thead>
            <tbody>
            {data.map(e => <TableRow key={e['_id']} e={e}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
