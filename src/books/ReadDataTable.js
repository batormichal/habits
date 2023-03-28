import React, {useEffect, useState} from 'react';
import RESTService from "../RESTService";
import moment from "moment/moment";

const ReadDataTable = () => {
    const [data, setData] = useState([])
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        RESTService.getReadingData("literature").then(e => {
            setData(e);
        });
    }, [])

    const deleteReadData = (id) => {
        console.log(id);
        RESTService.deleteReadData(id).then(() => {
            RESTService.getReadingData('literature').then(e => {
                setData(e);
            });
        });
        console.log(id);
    }
    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const sortedData = data.sort((a, b) => {
        const columnA = a[sortBy];
        const columnB = b[sortBy];
        if (sortOrder === 'asc') {
            if (typeof columnA === 'string') {
                return columnA.localeCompare(columnB);
            } else {
                return columnA - columnB;
            }
        } else {
            if (typeof columnA === 'string') {
                return columnB.localeCompare(columnA);
            } else {
                return columnB - columnA;
            }
        }
    });

    function getPages(type, pages) {
        if (type === "Ebook") {
            return Math.round(pages * 100) + "%";
        }
        return pages;
    }

    return (<table className="book-table">
        <thead>
        <tr>
            <th onClick={() => handleSort('date')}>
                Data {sortBy === 'date' && sortOrder === 'asc' && '▲'}
                {sortBy === 'date' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('title')}>
                Tytuł {sortBy === 'title' && sortOrder === 'asc' && '▲'}
                {sortBy === 'title' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('type')}>
                Typ {sortBy === 'type' && sortOrder === 'asc' && '▲'}
                {sortBy === 'type' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('pages')}>
                Stron {sortBy === 'pages' && sortOrder === 'asc' && '▲'}
                {sortBy === 'pages' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('pages_calculated')}>
                Obliczone {sortBy === 'pages_calculated' && sortOrder === 'asc' && '▲'}
                {sortBy === 'pages_calculated' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('next_page')}>
                Następne {sortBy === 'next_page' && sortOrder === 'asc' && '▲'}
                {sortBy === 'next_page' && sortOrder === 'desc' && '▼'}
            </th>
            <th>Options</th>
        </tr>
        </thead>
        <tbody>
        {sortedData.map((row, index) => (<tr key={index}>
            <th>{moment(row.date).format('ddd, D MMMM')}</th>
            <td>{row.title}</td>
            <td>{row.number}</td>
            <td>{getPages(row.type, row.pages)}</td>
            <td>{row.title && Math.round(row.pages_calculated)}</td>
            <td>{getPages(row.type, row.next_page)}</td>
            <td>{row.title && <span>
                    <button className="button-1 button-small">Edit</button>
                <button className="button-1 button-red button-small"
                        onClick={() => deleteReadData(row._id)}>Delete</button></span>}

            </td>
        </tr>))}
        </tbody>
    </table>);
};

export default ReadDataTable;