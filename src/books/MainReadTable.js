import {ReadDateTable} from "./ReadDateTable";
import React, {useState} from "react";
import ReadDataTable from "./ReadDataTable";
import './ReadDataTable.css'

export const MainReadTable = () => {
    const [category, setCategory] = useState("literature")
    return <React.Fragment>
        <button className={category === "literature" ? "button-1 button-selected" : "button-1"}
                onClick={() => setCategory("literature")}>Literature
        </button>
        <button className={category === "comics" ? "button-1 button-selected" : "button-1"}
                onClick={() => setCategory("comics")}>Komiksy
        </button>
        <ReadDataTable/></React.Fragment>
}