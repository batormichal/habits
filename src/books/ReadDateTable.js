import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import './ReadDataTable.css'
import {Link} from "react-router-dom";


export const ReadDateTable = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        RESTService.getReadingData().then(e => {
            setData(e);
        });
    }, [])

    const resetWithSheetData = () => {
        RESTService.readDataFromSheetToMongo().then(() => {
            RESTService.getReadingData().then(e => {
                setData(e);
            });
        });
    }

    return <div>
        <Link className="button-1" to="/books/reading/add">Dodaj</Link>
        <button className="button-1"
                onClick={resetWithSheetData}>Pull data
        </button>
        {data.length !== 0 && <table className="book-table">
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
            {data.map(e => <TableRow e={e} key={e['_id']}/>)}
            </tbody>
        </table>}
    </div>
}
