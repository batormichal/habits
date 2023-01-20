import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useParams} from "react-router";


export default function StoryPage() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState({readingData: []});
    useEffect(() => {
        RESTService.getStoryById(id).then(e => {
            setStory(e);
            setLoading(false)
        });
    }, [id])
    return loading ? <h2>LOADING</h2> : <React.Fragment>
        <p>Tytuł: {story.title}</p>
        <p>Kod: {story.code}</p>
        <p>Czytane: {story.readingData.length}</p>
    </React.Fragment>

}
