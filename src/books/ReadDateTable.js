import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import LiteratureTableRow from "./literature/LiteratureTableRow";
import './ReadDataTable.css'
import {Link} from "react-router-dom";
import {bookSyncCheck} from "../local_properties";
import ComicsTableRow from "./comics/ComicsTableRow";


export const ReadDateTable = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        RESTService.getReadingData(props.category).then(e => {
            setData(e);
            setLoading(false);
        });
    }, [props.category])

    const resetWithSheetData = () => {
        RESTService.readDataFromSheetToMongo().then(() => {
            RESTService.getReadingData(props.category).then(e => {
                setData(e);
            });
        });
    }

    const deleteReadData = (id) => {
        RESTService.deleteReadData(id).then(() => {
            RESTService.getReadingData(props.category).then(e => {
                setData(e);
            });
        });
        console.log(id);
    }

    return <div>
        <Link className="button-1" to="/books/reading/add">Dodaj</Link>
        <button className="button-1"
                onClick={resetWithSheetData}>Pull data
        </button>
        <a href={bookSyncCheck} className="button-1">Check sync</a>
        {!loading && <table className="book-table">
            <thead>
            {props.tr}
            </thead>
            <tbody>
            {props.category === "comics" && data.map(e => <ComicsTableRow key={e['_id'] || e['date']} e={e}
                                                                          deleteReadData={e => deleteReadData(e)}/>)}
            {props.category === "literature" && data.map(e => <LiteratureTableRow key={e['_id'] || e['date']}
                                                                                  deleteReadData={e => deleteReadData(e)}
                                                                                  e={e}/>)}
            </tbody>
        </table>}
        {loading && <h2>LOADING...</h2>}
    </div>
}
