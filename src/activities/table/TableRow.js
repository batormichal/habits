import React, {useState} from "react";
import moment from "moment";
import '../../books/ReadDataTable.css'


export default function TableRow(props) {
    const [edit, setEdit] = useState({status: false});
    const data = props.e;


    return <React.Fragment>
        <tr>
            <th>{moment(data['date']).format('ddd, D MMMM')}</th>
            <td className="bold-row">{data['title']}</td>
            <td>{data['type']}</td>
            <td>{data['pages']}</td>
            <td>{data['next_page']}</td>
            <td className="bold-row">{data['title'] && Math.round(data['pages_calculated'])}</td>
            <td key={Math.random()}>
                {data['title'] !== undefined && <React.Fragment>
                    <button className="button-1 button-small" key={Math.random()}
                            onClick={() => setEdit({status: !edit.status})}>Edit
                    </button>
                    <button className="button-1 button-red button-small" key={Math.random()}
                            onClick={() => props.deleteReadData(data._id)}>Delete
                    </button>
                </React.Fragment>}
            </td>
        </tr>
        {/*{edit.status && <tr>*/}
        {/*    <th colSpan="7"><AddReadDataForm book={data}/></th>*/}
        {/*</tr>}*/}
    </React.Fragment>
}
