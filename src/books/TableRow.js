import React from "react";
import moment from "moment";
import {useState} from "react";
import {AddReadDataForm} from "./AddReadDataForm";
import './ReadDataTable.css'


export default function TableRow(props) {
    const [edit, setEdit] = useState({status: false});
    const e = props.e;

    function getPages(pages) {
        if (e['type'] === "Ebook") {
            return Math.round(pages * 100) + "%";
        }
        return pages;
    }


    return <React.Fragment>
        <tr>
            <th>{moment(e['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{e['title']}</td>
            <td>{e['type']}</td>
            <td>{getPages(e['pages'])}</td>
            <td>{getPages(e['next_page'])}</td>
            <td className="bold-row">{e['title'] && Math.round(e['pages_calculated'])}</td>
            <td key={Math.random()}>
                {e['title'] !== undefined && <React.Fragment>
                    <button className="button-1 button-small" key={Math.random()}
                            onClick={() => setEdit({status: !edit.status})}>Edit
                    </button>
                    <button className="button-1 button-red button-small" key={Math.random()}
                            onClick={() => props.deleteReadData(e._id)}>Delete
                    </button>
                </React.Fragment>}
            </td>
        </tr>
        {edit.status && <tr>
            <th colSpan="7"><AddReadDataForm book={e}/></th>
        </tr>}
    </React.Fragment>
}
