import React from "react";
import moment from "moment";
import {useState} from "react";
import {AddReadDataForm} from "./AddReadDataForm";


export default function TableRow({e}) {
    const [edit, setEdit] = useState({status: false});

    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td>{e['title']}</td>
            <td>{e['type']}</td>
            <td>{e['pages']}</td>
            <td>{e['next_page']}</td>
            <td>{e['title'] && Math.round(e['pages_calculated'])}</td>
            <td>
                {e['title'] !== undefined &&
                    <button className="btn btn-secondary btn-sm"
                            onClick={() => setEdit({status: !edit.status})}>Edit
                    </button>
                }
            </td>
        </tr>
        {edit.status && <tr><th colSpan="4"><AddReadDataForm/></th></tr>}
    </React.Fragment>
}
