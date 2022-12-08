import React from "react";
import moment from "moment";
import './PeriodReadingStats.css'


export default function TableRow(props) {
    const e = props.e;


    return <React.Fragment>
        <tr className={e['pages']>70 && "bold-row-stats"}>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td>{e['pages']}</td>
        </tr>
    </React.Fragment>
}
