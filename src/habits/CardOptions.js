import React from "react";
import './CardOptions.css'


export const CardOptions = (props) => {
    return <div className="options">
        <button className="option-button btn btn-secondary btn-sm"
                onClick={() => props.setValue("v")}>V
        </button>
        <button className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue("-")}>-
        </button>
        <button className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue("x")}>X
        </button>
        <button className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue(",")}>,
        </button>
    </div>

}
