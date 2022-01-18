import {GenericTable} from "../exercises/GenericTable";
import {useState} from "react";


export const ActivitiesMenu = () => {
    const [show, setShow] = useState({component: "stress"});

    return <div>
        <button onClick={() => setShow({component: "stress"})}
                className="btn">Przełamanie
        </button>
        <button onClick={() => setShow({component: "outgoing"})}
                className="btn">Wyjścia
        </button>
        <button onClick={() => setShow({component: "learning"})}
                className="btn">Nauka
        </button>
        {show.component === 'stress' &&
            <GenericTable data={[]} headers={["TEST", "2"]}
                          keys={["d", "s"]}/>}
        {show.component === 'outgoing' &&
            <GenericTable data={[]} headers={["d", "UUUU"]}
                          keys={["d", "s"]}/>}
        {show.component === 'learning' &&
            <GenericTable data={[]} headers={["d", "Learning"]}
                          keys={["d", "s"]}/>}
    </div>
}
