import React from "react";
import moment from "moment";
import '../ReadDataTable.css'


export default function ComicsTableRow(props) {
    const e = props.e;


    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{e['title']}</td>
            <td>{e['number']}</td>
            <td>{e['info']}</td>
            <td>{e['pages']}</td>
            <td key={Math.random()}>
                {e['title'] !== undefined &&
                    <button className="button-1 button-red button-small" key={Math.random()}
                            onClick={() => props.deleteReadData(e._id)}>Delete
                    </button>
                }
            </td>
        </tr>
    </React.Fragment>
}
