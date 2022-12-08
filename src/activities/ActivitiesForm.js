import {useForm} from "react-hook-form";
import React, {useState} from "react";


export const ActivitiesForm = (props) => {
    const {register, handleSubmit} = useForm();
    const [submitted, setSubmitted] = useState(false)
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const onSubmit = data => {
        data['type'] = props.component
        console.log(data)
        setSubmitted(true);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return <form className="activity-form" onSubmit={handleSubmit(onSubmit)}>
        <input className="input-long" {...register("name")} />
        <input className="input-short" {...register("points")} />
        <input type="date" value={date}{...register("date")} onChange={(e) => handleDateChange(e)}/>
        <button className="button-1">Dodaj</button>
        {submitted && <p>Saved</p>}
    </form>
}
