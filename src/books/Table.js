import React, {useState} from 'react';

const Table = ({data}) => {
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

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

    return (<table>
        <thead>
        <tr>
            <th onClick={() => handleSort('title')}>
                Title {sortBy === 'title' && sortOrder === 'asc' && '▲'}
                {sortBy === 'title' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('pages')}>
                Pages {sortBy === 'pages' && sortOrder === 'asc' && '▲'}
                {sortBy === 'pages' && sortOrder === 'desc' && '▼'}
            </th>
            <th onClick={() => handleSort('isRead')}>
                Is Read {sortBy === 'isRead' && sortOrder === 'asc' && '▲'}
                {sortBy === 'isRead' && sortOrder === 'desc' && '▼'}
            </th>
        </tr>
        </thead>
        <tbody>
        {sortedData.map((row, index) => (<tr key={index}>
            <td>{row.title}</td>
            <td>{row.pages}</td>
            <td>{row.isRead ? 'Yes' : 'No'}</td>
        </tr>))}
        </tbody>
    </table>);
};

export default Table;