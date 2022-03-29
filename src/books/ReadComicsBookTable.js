import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import TableRow from "./TableRow";
import './ReadDataTable.css'


export const ReadComicsBookTable = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        RESTService.getComicsBooksReadingData().then(e => {
            setData(e);
        });
    }, [])

    const resetWithSheetData = () => {
        RESTService.resetComicsBooksWithSheetData().then(() => {
            RESTService.getComicsBooksReadingData().then(e => {
                setData(e);
            });
        });
    }

    return <div>
        <button className="button-1 button-red"
                onClick={resetWithSheetData}>HARD RESET
        </button>
        {data.length !== 0 &&
            <table className="book-table">
                <thead>
                <tr>
                    <th>Data</th>
                    <th className="title">Tytuł</th>
                    <th>Typ</th>
                    <th>Strony</th>
                    <th>Następna</th>
                    <th>Obliczone</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {
                    getBooksList(data)
                }
                </tbody>
            </table>}
    </div>
}
const getBooksList = (data) => {
    let date = new Date();
    let elements = []
    for (let i = 0; i < data.length;) {
        let e = data[i];
        let e_date = new Date(e['date'].slice(0, e['date'].indexOf(" ")))
        if (date.getDate() === e_date.getDate()) {
            while (date.getDate() === e_date.getDate()) {
                elements.push(<TableRow e={e} key={e['_id']}/>)
                i++;
                if (i < data.length) {
                    e = data[i];
                    e_date = new Date(e['date'].slice(0, e['date'].indexOf(" ")))
                } else break;
            }
        } else {
            let a = {'date': date.toISOString()}
            elements.push(<TableRow e={a} key={date.toLocaleDateString()}/>)
        }
        date.setDate(date.getDate() - 1);
    }
    return elements;
}
