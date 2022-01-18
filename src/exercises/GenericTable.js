import React from 'react';


export const GenericTable = (props) => {
    return <table className="table table-striped">
        <thead>
        <tr>
            {props.headers.map(header => <th key={header}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {props.data.map(exercise =>
            <tr>
                {props.keys.map(key => <td>{exercise[key]}</td>)}
            </tr>
        )}
        </tbody>
    </table>
}
