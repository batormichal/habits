import React from "react";
import moment from "moment";
import './PeriodReadingStats.css'


export default function TableRow(props) {
    const e = props.e;


    return <React.Fragment>
        <tr className={e['pages']>70 ? "bold-row-stats" : undefined}>
            <th>{props.index}</th>
            <th>{moment(e['date']).format('D MMMM')}</th>
            <th>{e['pages']}</th>
        </tr>
    </React.Fragment>
}
