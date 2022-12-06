import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import './ReadDataTable.css'
import {Link} from "react-router-dom";


export const ReadDateTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RESTService.getReadingData().then(e => {
            setData(e);
            setLoading(false);
        });
    }, [])

    const resetWithSheetData = () => {
        RESTService.readDataFromSheetToMongo().then(() => {
            RESTService.getReadingData().then(e => {
                setData(e);
            });
        });
    }

    const deleteReadData = (id) => {
        RESTService.deleteReadData(id).then(() => {
            RESTService.getReadingData().then(e => {
                setData(e);
            });
        });
        console.log(id);
    }

    return <div>
        <Link className="button-1" to="/books/reading/add">Dodaj</Link>
        <button className="button-1"
                onClick={resetWithSheetData}>Pull data
        </button>
        <a href="http://192.168.0.170:5000/books/check-sync" className="button-1">Check sync</a>
        {!loading && <table className="book-table">
            <thead>
            <tr>
                <th>Data</th>
                <th className="title">Tytuł</th>
                <th>Typ</th>
                <th>Strony</th>
                <th>Następna</th>
                <th>Obliczone</th>
                <th>Opcje</th>
            </tr>
            </thead>
            <tbody>
            {data.map(e => <TableRow key={e['_id'] || e['date']} deleteReadData={e => deleteReadData(e)} e={e}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
