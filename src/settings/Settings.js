import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";
import {useForm} from "react-hook-form";


export default function Settings() {
    const [data, setData] = useState('');
    const {register, handleSubmit} = useForm();
    const sheetToMongo = () => {
        let date = new Date();
        date.setDate(date.getDate() - 5);
        RESTService.putDataFromSheetToMongo(date.toISOString().split('T')[0]).then(() => {
            setData("Data updated")
        }).catch(() => {
            setData("Operation failed")
        })
    }

    const mongoToSheet = (d) => {
        console.log(d);
        RESTService.postDataFromMongoToSheet(d).then(() => {
            setData("Data updated")
        }).catch(() => {
            setData("Operation failed")
        })
    }

    useEffect(() => {
        setData('2')
    }, [])

    return <React.Fragment>
        <div>
            <div>
                <form onSubmit={handleSubmit(mongoToSheet)}>
                    <input type='date' defaultValue="" {...register("date")} />
                    <input className="button-1" type="submit" value="Push data"/>
                </form>
            </div>
            <div>
                <button className="button-1"
                        onClick={sheetToMongo}>Pull data
                </button>
            </div>
        </div>
        <p>{data}</p>
    </React.Fragment>
}
