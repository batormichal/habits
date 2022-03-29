import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import {useForm} from "react-hook-form";


export const AddReadDataForm = () => {
    const [date, setDate] = useState(new Date());
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("exampleRequired", {required: true})} />
        <DatePicker onChange={setDate} value={date}/>
        {errors.exampleRequired && <span>This field is required</span>}
    </form>
}
