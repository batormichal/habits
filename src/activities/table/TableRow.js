import React, {useState} from "react";
import '../../books/ReadDataTable.css'


export default function TableRow(props) {
    const [edit, setEdit] = useState({status: false});
    const data = props.data;
    const keys = props.keys;


    return <React.Fragment>
        <tr>
            {keys.map(key => <td key={key}>{data[key]}</td>)}
            <td>
                {<React.Fragment>
                    <button className="button-1 button-small" key={Math.random()}
                            onClick={() => setEdit({status: !edit.status})}>Edit
                    </button>
                    <button className="button-1 button-red button-small" key={Math.random()}
                            onClick={() => props.deleteRow(data._id)}>Delete
                    </button>
                </React.Fragment>}
            </td>
        </tr>
        {/*{edit.status && <tr>*/}
        {/*    <th colSpan="7"><AddReadDataForm book={data}/></th>*/}
        {/*</tr>}*/}
    </React.Fragment>
}
