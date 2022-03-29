import React, {useState} from "react";
import {AddComicsReadData} from "./AddComicsReadData";
import {Link} from "react-router-dom";


export default function StoryRow({story, publicationId}) {
    console.log(story);
    const [edit, setEdit] = useState({status: false});
    const read = (story['read'] === true) ? "TAK" : "NIE";
    return <React.Fragment>
        <tr>
            <td className="bold-row">{story['code']}</td>
            <td>{story['position']}</td>
            <td className="bold-row">{story['title']}</td>
            <td>{story['storyAuthor']}</td>
            <td>{story['artAuthor']}</td>
            <td>{story['pages']}</td>
            <td className="bold-row">{read}</td>
            <td>
                <button className="button-1"
                        onClick={() => setEdit({status: !edit.status})}>Read
                </button>
                <Link className="button-1"
                      to={"/comics/story/" + story.storyId}>Details</Link>
            </td>
        </tr>
        {edit.status && <tr>
            <AddComicsReadData comics={story}
                                                publicationId={publicationId}/>

        </tr>}
    </React.Fragment>
}
