import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {useParams} from "react-router";


export const Series = () => {
    const {name} = useParams()
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        console.log(name);
        RESTService.getAllComicsPublicationsByName(name).then(e => {
            setPublications(e);
        });
    }, [name])

    return <React.Fragment>
        <div className="publication-list">{publications.map(e => <React.Fragment><Link
            className="publication-link"
            to={"/comics/publication/" + e['id']}>
            {e['seriesName']} - {e['title']}
        </Link>
            <div className="comicsHeader"><h2>{e.seriesName + " - " + e.title}</h2>
                <img alt={e.cover} style={{width: "200px"}}
                     src={RESTService.getCover(e.coverUrl)}/></div>
        </React.Fragment>)}</div>
    </React.Fragment>

}

