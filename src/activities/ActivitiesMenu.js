import React from "react";
import {useState} from "react";
import './ActivitiesMenu.css'
import {ActivitiesForm} from "./ActivitiesForm";
import {DefaultTable} from "./table/DefaultTable";


export const ActivitiesMenu = () => {
    const [show, setShow] = useState({component: "stress"});
    return <React.Fragment>
        <div className="activity-selector">
            <button onClick={() => setShow({component: "stress"})}
                    className="btn">Przełamanie
            </button>
            <button onClick={() => setShow({component: "outgoing"})}
                    className="btn">Wyjścia
            </button>
            <button onClick={() => setShow({component: "learning"})}
                    className="btn">Nauka
            </button>
        </div>
        <ActivitiesForm component={show.component}/>
        {show.component === 'stress' &&
            <React.Fragment><DefaultTable data={[{'d': "s", "s": "dududu"}]} headers={["TEST", "2"]}
                                          keys={["d", "s"]}/>
            </React.Fragment>}
        {show.component === 'outgoing' && <React.Fragment><DefaultTable data={[]} headers={["d", "UUUU"]}
                                                                        keys={["d", "s"]}/></React.Fragment>}
        {show.component === 'learning' && <React.Fragment><DefaultTable data={[]} headers={["d", "Learning"]}
                                                                        keys={["d", "s"]}/></React.Fragment>}
    </React.Fragment>
}
