import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {useForm} from "react-hook-form";


export const AddReadDataForm = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return <form className="add-book" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
            <label className="input-label" htmlFor="title">Tytuł</label>
            <input id="title" className="input" {...register("exampleRequired", {required: true})} />
        </div>
        <div className="input-block">
            <label className="input-label" htmlFor="date">Data</label>
            <input type="date"
                   id="date"
                   value={date}
                   className="input"
                   onChange={(e) => handleDateChange(e)}/>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
    </form>
}
