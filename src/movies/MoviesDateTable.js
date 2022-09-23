import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";


export const MoviesDateTable = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        RESTService.getMoviesData().then(e => {
            setData(e);
        });
    }, [])

    const resetWithSheetData = () => {
        RESTService.readDataFromSheetToMongo().then(() => {
            RESTService.getMoviesData().then(e => {
                setData(e);
            });
        });
    }

    return <div>
        <button className="button-1 button-red"
                onClick={resetWithSheetData}>HARD RESET
        </button>
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