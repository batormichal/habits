import React, {useState} from "react";
import RESTService from "../RESTService";
import {Field, Form, Formik} from "formik";


export function AddComicsReadData() {
    const [status, setStatus] = useState({success: false});
    const values = {
        id: '', date: '', publication: '', story: ''
    }
    return <div className="set-read input-group">
        <Formik
            initialValues={values}
            onSubmit={values => RESTService.addReadingData(values)
                .then(() => setStatus({success: true}))}>
            <Form>
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <Field onChange={e => console.log(e.target.value)}
                           className="form-control form-control-lg" id="title"
                           name="title" placeholder="Tytuł"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pages">Strony</label>
                    <Field type="number" className="form-control" id="pages"
                           name="pages"/>
                </div>
                <div className="form-group">
                    <label htmlFor="next_page">Dokąd</label>
                    <Field type="number" className="form-control" id="next_page"
                           name="next_page"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Data</label>
                    <Field type="date" className="form-control" id="date"
                           name="date"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Typ</label>
                    <Field as="select" className="form-control" id="type"
                           name="type"
                    >
                        <option value="Paper">Paper</option>
                        <option value="Ebook">Ebook</option>
                    </Field>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <p>{status.success}</p>
    </div>
}
