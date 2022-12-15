import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {useForm} from "react-hook-form";
import RESTService from "../../RESTService";


export const AddReadDataForm = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [category, setCategory] = useState('literature')
    const [ok, setOk] = useState(false);
    const onSubmit = data => {
        data['category'] = category
        console.log(data);
        //RESTService.addReadingData(data).then(() => setOk(true))
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    return <React.Fragment>
        <button value="literature" className={category === "literature" ? "button-1 button-selected" : "button-1"}
                onClick={(event) => setCategory(event.target.value)}>Literature
        </button>
        <button value="comics" className={category === "comics" ? "button-1 button-selected" : "button-1"} onClick={(event) => setCategory(event.target.value)}>Komiksy
        </button>
        <form className="add-book" onSubmit={handleSubmit(onSubmit)}>
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
                <input id="title" className="input" {...register("next_page", {required: true})} />
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
    </React.Fragment>
}
