import React, {useEffect, useState} from 'react';
import TableRow from "./TableRow";
import '../../books/ReadDataTable.css'
import {Link} from "react-router-dom";


export const DefaultTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setData([])
        setLoading(false);
    }, [])

    const headers = ['1', 'A']
    const deleteRow = (id) => {
        console.log(id);
    }

    return <div>
        <Link className="button-1" to="/books/reading/add">Dodaj</Link>
        {!loading && <table className="book-table">
            <thead>
            <tr>
                {headers.map(e => <th>{e}</th>)}
            </tr>
            </thead>
            <tbody>
            {data.map(e => <TableRow key={e['_id']} deleteRow={e => deleteRow(e)} e={e}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
