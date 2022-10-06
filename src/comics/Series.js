import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {init} from "../REST";
import {useForm} from "react-hook-form";


export const Series = () => {
    const [publications, setPublications] = useState([]);
    const {register, handleSubmit} = useForm();

    init(useEffect, RESTService.getAllComicsPublications, setPublications);

    const onSubmit = data => RESTService.addComicsByUrl(data['title'])

    return <React.Fragment>
        <form className="add-form" onSubmit={handleSubmit(onSubmit)}><label>Url: </label>
            <input {...register('title')} id="url"/>
            <button type='submit' className="button-1" >Dodaj</button>
        </form>
        <div className="publication-list">{publications.map(e => <Link
            className="publication-link"
            to={"/comics/publication/" + e['id']}>
            {e['seriesName']} - {e['title']}
        </Link>)}</div>
    </React.Fragment>

}

