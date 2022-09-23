import React from "react";
import moment from "moment";
import '../books/ReadDataTable.css'


export default function TableRow({e}) {
    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{e['title']}</td>
        </tr>
    </React.Fragment>
}
