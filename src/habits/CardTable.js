import React from "react";
import './CardTable.css'
import {CardOptions} from "./CardOptions";
import {getClassStyle} from "./CardTools";


export const CardTable = (props) => {
    console.log(props);
    return <div className={"card-table " + getClassStyle(props.value)}>
        {props.show_name && <p className="flex">{props.name}</p>}
        {props.show_value && <p className="value">{props.value || "~"}</p>}
        {props.edit && <CardOptions
            setValue={(p) => props.setValue(props.name, props.date, p)}/>}
    </div>
}