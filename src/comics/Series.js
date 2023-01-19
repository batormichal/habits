import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import './Series.css'


export const Series = () => {
    const {name} = useParams()
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        console.log(name);
        RESTService.getAllComicsPublicationsByName(name).then(e => {
            console.log(e);
            e = e.sort((a,b) => parseInt(a['number']) > parseInt(b["number"]))
            setPublications(e);
        });
    }, [name])

    const getClassOfTitle = (e) => {
        if(!e['owned']){
            return "not-owned"
        }
        else if(e['read'] === 0){
            return "not-read"
        }
        else if(e['read'] === 100){
            return "whole-read"
        }
        else {
            return "partially-read"
        }
    }

    return <React.Fragment>
        <div className="publication-list">{publications.map(e => <React.Fragment><Link
            key={e['id']}
            className={"publication-link " + getClassOfTitle(e)}
            to={"/comics/publication/" + e['id']}>
            {e['seriesName']} {e['number']} - {e['title']} <span>Przeczytane: {e['read']}%</span>
        </Link>
            {/*<div className="comicsHeader"><h2>{e.seriesName + " - " + e.title}</h2>*/}
            {/*    <img alt={e.cover} style={{width: "200px"}}*/}
            {/*         src={RESTService.getCover(e.coverUrl)}/>*/}
            {/*</div>*/}
        </React.Fragment>)}</div>
    </React.Fragment>

}

