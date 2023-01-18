import React, {useState} from "react";
import RESTService from "../RESTService";
import Calendar from "react-calendar";


export const AddComicsReadData = (props) => {
    const comics = props.comics;
    console.log(props);
    const [status, setStatus] = useState({success: ''});
    const [date, setDate] = useState(new Date());

    const handleSubmit = () => {
        let adjusted_date = new Date(date - date.getTimezoneOffset() * 60000);
        let data = {
            ...comics,
            complete: true,
            date: adjusted_date.toISOString().split('T')[0],
            publicationId: props.publicationId,
            publicationUrl: props.inducksUrl,
            id: null,
            completed: true,
            printId: comics.id
        }
        console.log(data);
        RESTService.addComicsReadingData(data).then(() => setStatus({success: 'Dodano'}))
    }

    return <td colSpan="10">
        <Calendar onChange={setDate} value={date}/>
        <button className="button-1" onClick={handleSubmit}>Submit</button>
        <p>{status.success}</p>
    </td>
}
