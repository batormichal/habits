import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {init} from "../REST";


export const Series = () => {
    const [publications, setPublications] = useState([]);

    init(useEffect, RESTService.getAllComicsPublications, setPublications);

    return publications.map(e => <Link className="publication-link"
                                          to={"/comics/publication/" + e['id']}>
        {e['seriesName']} - {e['title']}
    </Link>)

}

