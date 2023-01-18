import React, {useEffect, useState} from 'react';
import StoryRow from "./StoryRow";
import './PublicationTable.css'
import RESTService from "../RESTService";
import {useParams} from "react-router";
import './Series.css'


const headers = ["Kod", "Tytuł", "Scenariusz", "Rysunki", "Stron", "Czytane", "Opcje"]


export default function PublicationTable() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [publication, setPublication] = useState({
        stories: [], seriesName: ''
    });
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        RESTService.getComicsPublication(id).then(e => {
            setPublication(e);
            setLoading(false);
        });
    }, [id])

    const getClassOfTitle = (e) => {
        if (!e['owned']) {
            return "not-owned"
        } else if (e['read'] === 0) {
            return "not-read"
        } else if (e['read'] === 100) {
            return "whole-read"
        } else {
            return "partially-read"
        }
    }

    return <React.Fragment>
        {success && <div>Success</div>}
        {!loading && <React.Fragment>
            <div className="comicsHeader">
                <h2 className={getClassOfTitle(publication)}>{publication.seriesName + ' ' + publication.number + " - " + publication.title}</h2>
                <p>Przeczytane {publication.read}</p>
                {/*<img alt={publication.cover} style={{width: "200px"}}*/}
                {/*     src={RESTService.getCover(publication.coverUrl)}/>*/}
            </div>
            <div>
                <button className="button-1"
                        onClick={() => RESTService.setPublicationOwned(publication.id, publication.owned !== true).then(() => setSuccess(true))}>Owned
                </button>
                <button className="button-1"
                        onClick={() => RESTService.deletePublication(publication.id).then(() => setSuccess(true))}>Delete
                </button>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {publication.stories.map(story => <StoryRow key={story['id']}
                                                            story={story}
                                                            publicationId={publication.id}
                                                            inducksUrl={publication.inducksUrl}/>)}
                </tbody>
            </table>
        </React.Fragment>}
        {loading && <h2>LOADING... {id}</h2>}
    </React.Fragment>
}
