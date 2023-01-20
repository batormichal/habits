import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";
import {init} from "../REST";
import {useForm} from "react-hook-form";


export const ListOfSeries = () => {
    const [series, setSeries] = useState([]);
    const {register, handleSubmit} = useForm();
    const [success, setSuccess] = useState(false)

    init(useEffect, RESTService.getAllComicsPublications, setSeries);

    const onSubmit = data => RESTService.addComicsByUrl(data['title']).then(() => setSuccess(true))

    return <React.Fragment>
        {success && <p>Success!</p>}
        <form className="add-form" onSubmit={handleSubmit(onSubmit)}><label>Url: </label>
            <input {...register('title')} id="url"/>
            <button type='submit' className="button-1">Dodaj</button>
        </form>
        <div className="publication-list">{series.map(e => <Link
            key={e['name']}
            className="publication-link series-link"
            to={"/comics/series/" + e['name']}>
            {e['name']}
        </Link>)}</div>
    </React.Fragment>

}