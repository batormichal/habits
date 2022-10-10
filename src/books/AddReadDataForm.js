import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {useForm} from "react-hook-form";
import RESTService from "../RESTService";


export const AddReadDataForm = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [ok, setOk] = useState(false);
    const onSubmit = data => {
        console.log(data);
        RESTService.addReadingData(data).then(() => setOk(true))
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return <form className="add-book" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
            <label className="input-label" htmlFor="title">Tytuł</label>
            <input id="title" className="input" {...register("title", {required: true})} />
        </div>
        <div className="input-block">
            <label className="input-label" htmlFor="date">Data</label>
            <input type="date"
                   id="date"
                   value={date}
                   className="input"
                   {...register("date")}
                   onChange={(e) => handleDateChange(e)}/>
        </div>
        <div className="input-block">
            <label className="input-label" htmlFor="title">Stron</label>
            <input id="title" className="input" {...register("pages", {required: true})} />
        </div>
        <div className="input-block">
            <label className="input-label" htmlFor="title">Do</label>
            <input id="title" className="input" {...register("nextPage", {required: true})} />
        </div>
        <div className="input-block">
            <label className="input-label" htmlFor="title">Typ</label>
            <select id="type" className="input" {...register("type", {required: true})} >
                <option>Paper</option>
                <option>Ebook</option>
            </select>
        </div>
        <button className="button-1 form-button">Dodaj</button>
        {ok && <p>Dodano</p>}
        {errors.exampleRequired && <span>This field is required</span>}
    </form>
}
