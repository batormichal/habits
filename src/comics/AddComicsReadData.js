import React, {useState} from "react";
import RESTService from "../RESTService";


export function AddComicsReadData(props) {
    const comics = props.comics;
    const [status, setStatus] = useState({success: false});
    let [date, setDate] = useState(new Date().toISOString().split('T')[0])

    function handleSubmit() {
        let data = {
            ...comics,
            complete: true,
            date: date,
            publicationId: props.publicationId
        }
        console.log(data);
        RESTService.addComicsReadingData(data).then(() => setStatus({success: true}))
    }

    return <div className="set-read input-group">
        <input type="date" onChange={e => setDate(e.target.value)}
               value={date}/>
        <button onClick={handleSubmit}>Submit</button>
        <p>{status.success}</p>
    </div>
}
