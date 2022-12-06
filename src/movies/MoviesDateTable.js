import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import {Link} from "react-router-dom";


export const MoviesDateTable = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        RESTService.getMoviesData().then(e => {
            setData(e);
        });
    }, [])

    const sheetToMongo = () => {
        RESTService.moviesFromSheetToMongo().then(() => {
            RESTService.getMoviesData().then(e => {
                setData(e);
            });
        });
    }

    return <div>
        <Link className="button-1" to="/movies/add">Dodaj</Link>
        <button className="button-1"
                onClick={sheetToMongo}>Pull data
        </button>
        <a href="http://192.168.0.170:5000/movies/check-sync" className="button-1">Check sync</a>
        {data.length !== 0 && <table className="book-table">
            <thead>
            <tr>
                <th>Data</th>
                <th className="title">Tytuł</th>
            </tr>
            </thead>
            <tbody>
            {data.map(e => <TableRow e={e} key={e['_id']}/>)}
            </tbody>
        </table>}
    </div>
}