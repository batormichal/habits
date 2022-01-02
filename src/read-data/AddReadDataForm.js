import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import HabitsService from "../HabitsService";
import {useLocation} from "react-router";


export const AddReadDataForm = () => {
    const [status, setStatus] = useState("")
    const location = useLocation();
    console.log(location)
    return <div>
        <h1>Add reading data</h1>
        <Formik
            initialValues={{
                title: '',
                pagesRead: '',
                nextPage: '',
                date: new Date().toISOString().split('T')[0]
            }}
            onSubmit={values => HabitsService.addReadingData(values)
                .then(() => setStatus({success: true})
                )}>
            <Form>
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <Field className="form-control form-control-lg" id="title"
                           name="title" placeholder="Tytuł"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="pagesRead">Strony</label>
                    <Field type="number" className="form-control" id="pagesRead"
                           name="pagesRead"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="nextPage">Dokąd</label>
                    <Field type="number" className="form-control" id="nextPage"
                           name="nextPage"
                    />
                </div>
                <div className="form-group col-2">
                    <label htmlFor="date">Data</label>
                    <Field type="date" className="form-control" id="date"
                           name="date"
                    />
                </div>
                <div className="form-group col-2">
                    <label htmlFor="type">Typ</label>
                    <Field className="form-control" id="type"
                           name="type"
                    />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <p>{status.success}</p>
    </div>
}
