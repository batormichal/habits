import {ReadDateTable} from "./ReadDateTable";
import React, {useState} from "react";

export const MainReadData = () => {
    const [category, setCategory] = useState("literature")
    const books = <tr>
        <th>Data</th>
        <th className="title">Tytuł</th>
        <th>Typ</th>
        <th>Strony</th>
        <th>Następna</th>
        <th>Obliczone</th>
        <th>Opcje</th>
    </tr>
    const comics = <tr>
        <th>Data</th>
        <th className="title">Tytuł</th>
        <th>Numer</th>
        <th>Info</th>
        <th>Strony</th>
        <th>Opcje</th>
    </tr>
    let tr
    if(category === "comics"){
        tr = comics
    }
    else{
        tr = books
    }
    return <React.Fragment>
        <button className={category === "literature" ? "button-1 button-selected" : "button-1"} onClick={() => setCategory("literature")}>Literature</button>
        <button className={category === "comics" ? "button-1 button-selected" : "button-1"} onClick={() => setCategory("comics")}>Komiksy</button>
        <ReadDateTable category={category} tr={tr}/></React.Fragment>
}