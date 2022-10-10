import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useParams} from "react-router";


export default function StoryPage() {
    const {id} = useParams();

    const [story, setStory] = useState({readingData:[]});
    useEffect(() => {
        RESTService.getStoryById(id).then(e => {
            if (e.readingData == null) e.readingData = []
            setStory(e);
            console.log(e);
        });
    }, [id])
    return <React.Fragment>
        <p>Tytuł: {story.title}</p>
        <p>Kod: {story.code}</p>
        <p>Czytane: {story.readingData.length}</p>
    </React.Fragment>
}
