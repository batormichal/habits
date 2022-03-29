import React from "react";
import './CardTableItem.css'


export const CardTableItem = (props) => {
    return <Item name={props.name} class={"card-table-header"}/>
}

export const CardTableDate = (props) => {
    return <Item name={props.name} class={"card-table-date"}/>
}

const Item = (props) => {
    return <div className={"card-table " + props.class}>
        <p className="flex">{props.name}</p>
    </div>
}
