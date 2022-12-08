import React, {useEffect, useState} from 'react';
import TableRow from "./TableRow";
import '../../books/ReadDataTable.css'


export const DefaultTable = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, [])

    const headers = props.headers
    const keys = props.keys
    const data = props.data

    const deleteRow = (id) => {
        console.log(id);
    }

    return <div>
        {!loading && <table className="activity-table book-table">
            <thead>
            <tr>
                {headers.map(e => <th>{e}</th>)}
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {data.map(e => <TableRow key={e['_id']} deleteRow={e => deleteRow(e)} keys={keys} data={e}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
