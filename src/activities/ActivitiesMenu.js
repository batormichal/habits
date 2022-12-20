import React from "react";
import {useState} from "react";
import './ActivitiesMenu.css'
import {ActivitiesForm} from "./ActivitiesForm";
import {DefaultTable} from "../table/DefaultTable";


export const ActivitiesMenu = () => {
    const [show, setShow] = useState({component: "stress"});
    const headers = ["Nazwa", "Kategoria", "Punkty"]
    const keys = ['name', 'category', 'points']
    return <React.Fragment>
        <div className="activity-selector">
            <button onClick={() => setShow({component: "stress"})}
                    className={show.component === "stress" ? "btn-chosen" : "btn"}>Przełamanie
            </button>
            <button onClick={() => setShow({component: "outgoing"})}
                    className={show.component === "outgoing" ? "btn-chosen" : "btn"}>Wyjścia
            </button>
            <button onClick={() => setShow({component: "learning"})}
                    className={show.component === "learning" ? "btn-chosen" : "btn"}>Nauka
            </button>
        </div>
        <ActivitiesForm component={show.component}/>
        {show.component === 'stress' && <DefaultTable data={[{'name': "s", "category": "dududu", "points": 9}]} headers={headers}
                                                      keys={keys}/>}
        {show.component === 'outgoing' && <DefaultTable data={[]} headers={headers}
                                                        keys={keys}/>}
        {show.component === 'learning' && <DefaultTable data={[]} headers={headers}
                                                        keys={keys}/>}
    </React.Fragment>
}
