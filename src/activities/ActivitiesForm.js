import {useForm} from "react-hook-form";
import {useState} from "react";


export const ActivitiesForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = data => {
        data['type'] = props.component
        console.log(data)
        setSubmitted(true);
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("name")} />
        <input {...register("points", {required: true})} />
        {errors.points && <p>This field is required</p>}
        <input type="submit"/>
        {submitted && <p>Saved</p>}
    </form>
}
