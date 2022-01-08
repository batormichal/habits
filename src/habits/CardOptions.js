import React from "react";
import './CardOptions.css'


export const CardOptions = (props) => {
    return <div className="options">
        <button key="v" className="option-button btn btn-secondary btn-sm"
                onClick={() => props.setValue("v")}>V
        </button>
        <button key="-" className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue("-")}>-
        </button>
        <button key="x" className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue("x")}>X
        </button>
        <button key="," className="btn btn-secondary btn-sm option-button"
                onClick={() => props.setValue(",")}>,
        </button>
    </div>

}
