import React, {useEffect, useState} from 'react';
import StoryRow from "./StoryRow";
import './PublicationTable.css'
import RESTService from "../RESTService";
import {useParams} from "react-router";


const headers = ["Kod", "Pozycja", "Tytuł", "Scenariusz", "Rysunki", "Stron", "Czytane", "Opcje"]


export default function PublicationTable() {
    const { id } = useParams();
    const [publication, setPublication] = useState({stories: []});

    useEffect(() => {
        RESTService.getComicsPublication(id).then(e => {
            setPublication(e);
        });
    }, [id])
    return <React.Fragment>
        <h2>{publication.title}</h2>
        <table className="table table-striped">
        <thead>
        <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {publication.stories.map(story =>
            <StoryRow key={story['id']}
                      story={story}
                      publicationId={publication.id}/>
        )}
        </tbody>
    </table></React.Fragment>
}
