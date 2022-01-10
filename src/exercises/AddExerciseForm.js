import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import RESTService from "../RESTService";


export const AddExerciseForm = () => {
    const [status, setStatus] = useState(false)
    return <div>
        <h1>Add new exercise</h1>
        <Formik
            initialValues={{
                type: '',
                duration: '',
                distance: '',
                weight: '',
                series: '',
                date: new Date().toISOString().split('T')[0],
            }}
            onSubmit={values => RESTService.addExercise(values)
                .then(() => setStatus({success: true})
                )}>
            <Form>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <Field className="form-control form-control-lg" id="type"
                        name="type" placeholder="Type"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="duration">Duration</label>
                    <Field type="number" className="form-control" id="duration"
                           name="duration"/>
                </div>
                <div className="form-group col-2">
                    <label htmlFor="distance">Distance</label>
                    <Field type="number" className="form-control" id="distance"
                           name="distance"
                    />
                </div>
                <div className="form-group col-2">
                    <label htmlFor="weight">Weight</label>
                    <Field type="number" className="form-control" id="weight"
                           name="weight"
                    />
                </div>
                <div className="form-group col-2">
                    <label htmlFor="series">Series</label>
                    <Field type="number" className="form-control" id="series"
                           name="series"
                    />
                </div>
                <div className="form-group col-2">
                    <label htmlFor="date">Data</label>
                    <Field type="date" className="form-control" id="date"
                           name="date"
                    />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <p>{status.success}</p>
    </div>
}
