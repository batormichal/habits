import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {init} from "../REST";


export const Series = () => {
    const [publications, setPublications] = useState([]);

    init(useEffect, RESTService.getAllComicsPublications, setPublications);

    return <React.Fragment>
        <div className="add-form"><label>Url: </label>
            <input/>
            <button className="button-1">Dodaj</button>
        </div>
        <div className="publication-list">{publications.map(e => <Link
            className="publication-link"
            to={"/comics/publication/" + e['id']}>
            {e['seriesName']} - {e['title']}
        </Link>)}</div>
    </React.Fragment>

}

