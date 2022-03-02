import React, {useState} from "react";
import {AddComicsReadData} from "./AddComicsReadData";


const keys = ["code", "position", "title", "storyAuthor", "artAuthor", "pages", "read"]


export default function StoryRow({story, publicationId}) {
    const [edit, setEdit] = useState({status: false});
    if (story['read'] === true) {
        story['read'] = "TAK";
    } else if (story['read'] === false){
        story['read'] = "NIE";
    }
    return <React.Fragment>
        <tr key={story[keys[0]]}>
            {keys.map(key => <td key={key}>{story[key]}</td>)}
            <td>
                <button className="book-button btn"
                        onClick={() => setEdit({status: !edit.status})}>Read
                </button>
            </td>
        </tr>
        {edit.status && <tr>
            <td colSpan="10"><AddComicsReadData comics={story}
                                                publicationId={publicationId}/>
            </td>
        </tr>}
    </React.Fragment>
}
