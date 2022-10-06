import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useParams} from "react-router";


export default function StoryPage() {
    const {id} = useParams();

    const [story, setStory] = useState({});
    const [readingData, setReadingData] = useState({readingData: []})
    useEffect(() => {
        RESTService.getStoryById(id).then(e => {
            setStory(e);
            console.log(e);
        });
        RESTService.getReadingDataForStory(id).then(e => {
            setReadingData(e);
            console.log(e);
        });
    }, [id])
    return <React.Fragment>
        <p>Tytuł: {story.title}</p>
        <p>Kod: {story.code}</p>
        <p>Czytane: {readingData.length}</p>
        <img alt="MGG51" style={{width: "200px"}} src="http://192.168.0.225:6001/gigantpoleca-koncertżyczeń"/>
    </React.Fragment>
}
