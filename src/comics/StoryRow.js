import React, {useState} from "react";
import {AddComicsReadData} from "./AddComicsReadData";


export default function StoryRow({keys, story}) {
    const [edit, setEdit] = useState({status: false});
    const isRead = story['datesRead'].length > 0 ? "Yes" : "No";

    return <React.Fragment>
        <tr key={story[keys[0]]}>
            {keys.map(key => <td key={key}>{story[key]}</td>)}
            <td>{isRead}</td>
            <td>
                <button className="book-button btn"
                        onClick={() => setEdit({status: !edit.status})}>Read
                </button>
            </td>
        </tr>
        {edit.status && <td colSpan="6"><AddComicsReadData/></td>}
    </React.Fragment>
}
