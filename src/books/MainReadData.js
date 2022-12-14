import {ReadDateTable} from "./ReadDateTable";
import React, {useState} from "react";

export const MainReadData = () => {
    const [mode, setMode] = useState("literature")
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
    </tr>
    let tr
    if(mode === "comics"){
        tr = comics
    }
    else{
        tr = books
    }
    return <React.Fragment>
        <button className="button-1" onClick={() => setMode("literature")}>Literature</button>
        <button className="button-1" onClick={() => setMode("comics")}>Komiksy</button>
        <ReadDateTable category={mode} tr={tr}/></React.Fragment>
}