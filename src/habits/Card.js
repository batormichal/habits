import React from "react";
import './Card.css'
import {CardOptions} from "./CardOptions";
import {getClassStyle} from "./CardTools";

export const Card = (props) => {
    return <div className={"card-day " + getClassStyle(props.value)}>
        {props.maximal && <p className="flex">{props.name}</p>}
        {props.maximal && <p className="value">{props.value || "~"}</p>}
        {props.edit !== false && <CardOptions
            setValue={(p) => props.setValue(props.name, props.date, p, props.id)}/>}
    </div>
}
