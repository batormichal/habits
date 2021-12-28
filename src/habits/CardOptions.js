import React from "react";


export const CardOptions = (props) => {
    return <div>
        <button onClick={() => props.setValue("v")}>V</button>
        <button onClick={() => props.setValue("-")}>-</button>
        <button onClick={() => props.setValue("x")}>X</button>
    </div>

}
