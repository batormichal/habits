import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import RESTService from "../RESTService";


export const AddReadDataForm = (props) => {
    const [status, setStatus] = useState(false)
    let values;
    if (props.book !== undefined) {
        values = {
            id: props.book._id,
            title: props.book.title,
            pagesRead: props.book.pages,
            nextPage: props.book.next_page,
            date: props.book.date.split(" ")[0],
            type: props.book.type
        }
    } else {
        values = {
            title: '',
            pagesRead: '',
            nextPage: '',
            date: new Date().toISOString().split('T')[0],
            type: ''
        }
    }
    return <div>
        <h1>Add reading data</h1>
        <Formik
            initialValues={values}
            onSubmit={values => RESTService.addReadingData(values)
                .then(() => setStatus({success: true})
                )}>
            <Form>
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <Field onChange={e => console.log(e.target.value)}
                           className="form-control form-control-lg" id="title"
                           name="title" placeholder="Tytuł"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="pages">Strony</label>
                    <Field type="number" className="form-control" id="pages"
                           name="pages"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="next_page">Dokąd</label>
                    <Field type="number" className="form-control" id="next_page"
                           name="next_page"
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
