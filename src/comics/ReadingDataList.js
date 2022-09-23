import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useParams} from "react-router";


export default function ReadingDataList() {
    const {id} = useParams();

    const [data, setData] = useState(['1']);
    useEffect(() => {
        RESTService.getAllReadingData().then(e => {
            setData(e);
            console.log(e);
        });
    }, [id])
    return <React.Fragment>
        {data.map(e =>
                <p>{e.code}</p>)}
    </React.Fragment>
}
