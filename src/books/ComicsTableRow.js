import React from "react";
import moment from "moment";
import './ReadDataTable.css'


export default function ComicsTableRow(props) {
    const e = props.e;


    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{e['title']}</td>
            <td>{e['number']}</td>
            <td>{e['info']}</td>
            <td>{e['pages']}</td>
        </tr>
    </React.Fragment>
}
