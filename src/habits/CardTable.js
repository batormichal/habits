import React from "react";
import './CardTable.css'
import {CardOptions} from "./CardOptions";
import {getClassStyle} from "./CardTools";

export const CardTable = (props) => {
    return <div className={"card-table " + getClassStyle(props.value)}>
        {props.maximal && <p className="flex">{props.name}</p>}
        {props.maximal && <p className="value">{props.value || "~"}</p>}
        {props.edit !== false && <CardOptions
            setValue={(p) => props.setValue(props.name, props.date, p)}/>}
    </div>
}
