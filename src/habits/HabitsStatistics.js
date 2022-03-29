import React, {useEffect, useState} from "react";
import RESTService from "../RESTService";


export const HabitsStatistics = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        RESTService.getStatisticsForAllHabits().then(e => {
            setData(e);
        })
    }, [])

    const habits = Object.keys(data)
    const rows = Object.keys(data[Object.keys(data)[0]])
    return <div>
        <table className="habits-stats-table">
            <thead>
            <tr>
                <th/>
                {habits.map(habit => <th>{habit}</th>)}
            </tr>
            </thead>
            <tbody>
            {rows.map(row => <tr>
                <td>{row}</td>
                {habits.map(e => <td>{data[e][row]}</td>)}
            </tr>)}
            </tbody>
        </table>
    </div>

}
