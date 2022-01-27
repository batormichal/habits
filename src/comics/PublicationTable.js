import React from 'react';
import StoryRow from "./StoryRow";


const headers = ["Kod", "Pozycja", "Tytuł", "Scenariusz", "Rysunki", "Stron", "Czytane"]
const keys = ["code", "position", "title", "storyAuthor", "artAuthor", "pages"]

export default function PublicationTable(props) {
    return <table className="table table-striped">
        <thead><tr>
            {headers.map(header => <th key={header}>{header}</th>)}
        </tr></thead>
        <tbody>
        {props.data.map(story =>
            <StoryRow story={story} keys={keys}/>
        )}
        </tbody>
    </table>
}
