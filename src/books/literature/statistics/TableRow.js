import React from "react";
import moment from "moment";
import './PeriodReadingStats.css'


export default function TableRow(props) {
    const e = props.e;
    const recent = new Date('2022-12-01') < new Date(e['date']) ? "recent-row-stats" : ""
    const bold = e['pages'] > 70 ? "bold-row-stats" : ""

    return <React.Fragment>
        <tr className={`${recent} ${bold}`}>
            <th>{props.index}</th>
            <th>{moment(e['date']).format('D MMMM')}</th>
            <th>{e['pages']}</th>
        </tr>
    </React.Fragment>
}
