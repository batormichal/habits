import React from "react";
import moment from "moment";
import '../books/ReadDataTable.css'


export default function TableRow(props) {
    const e = props.e;

    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td>{e['code']}</td>
            <td className="bold-row">{e['title']}</td>
            <td>{e['pages']}</td>
        </tr>
    </React.Fragment>
}
