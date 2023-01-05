import React, {useEffect, useState} from 'react';
import StoryRow from "./StoryRow";
import './PublicationTable.css'
import RESTService from "../RESTService";
import {useParams} from "react-router";


const headers = ["Kod", "Tytuł", "Scenariusz", "Rysunki", "Stron", "Czytane", "Opcje"]


export default function PublicationTable() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [publication, setPublication] = useState({
        stories: [], seriesName: ''
    });

    useEffect(() => {
        RESTService.getComicsPublication(id).then(e => {
            setPublication(e);
            setLoading(false);
        });
    }, [id])

    return <React.Fragment>
        {!loading && <React.Fragment>
            <div className="comicsHeader"><h2>{publication.seriesName + " - " + publication.title}</h2>
                <img alt={publication.cover} style={{width: "200px"}}
                     src={RESTService.getCover(publication.coverUrl)}/></div>
            <table className="table table-striped">
                <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {publication.stories.map(story => <StoryRow key={story['id']}
                                                            story={story}
                                                            publicationId={publication.id}/>)}
                </tbody>
            </table>
        </React.Fragment>}
        {loading && <h2>LOADING... {id}</h2>}
    </React.Fragment>
}
