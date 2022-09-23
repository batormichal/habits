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
        <input {...register("exampleRequired", {required: true})} />
        <input type="date"
               value={date}
               onChange={(e) => handleDateChange(e)}/>
        {errors.exampleRequired && <span>This field is required</span>}
    </form>
}
