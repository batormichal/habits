import React from "react";
import './CardOptions.css'


export const CardOptions = (props) => {
    return <div className="options">
        <span key="v" onClick={() => props.setValue("v")}>V</span>
        <span key="-" onClick={() => props.setValue("-")}>-</span>
        <span key="x" onClick={() => props.setValue("x")}>X</span>
        <span key="," onClick={() => props.setValue(",")}>,</span>
        <span key="//" onClick={() => props.setValue("")}>""</span>
    </div>

}
