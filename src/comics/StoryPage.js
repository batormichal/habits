import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useParams} from "react-router";


export default function StoryPage() {
    const {id} = useParams();

    const [story, setStory] = useState({});
    useEffect(() => {
        RESTService.getStoryById(id).then(e => {
            setStory(e);
            console.log(e);
        });
    }, [id])
    return <React.Fragment>
        <p>{story.title}</p>
    </React.Fragment>
}
