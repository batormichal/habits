import React from "react";
import moment from "moment";
import '../ReadDataTable.css'


export default function TableRow(props) {
    const e = props.e;


    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{e['pages']}</td>
        </tr>
    </React.Fragment>
}
