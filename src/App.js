import './App.css';
import React from "react";
import HabitsForDay from "./habits/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HabitsForMultipleDays from "./habits/HabitsForMultipleDays";
import {AddReadDataForm} from "./read-data/AddReadDataForm";
import ReadDateTable from "./read-data/ReadDateTable";
import Menu from "./Menu";
import HabitsStatistics from "./habits/HabitsStatistics";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Menu/>
                <div className="container"><Routes>
                    <Route element={<HabitsForDay/>}
                           path="path1"/>
                    <Route element={<HabitsForMultipleDays/>}
                           path="path2"/>
                    <Route element={<AddReadDataForm/>}
                           path="path3"/>
                    <Route element={<ReadDateTable/>}
                           path="path4"/>
                    <Route element={<HabitsStatistics/>}
                           path="path5"/>
                </Routes></div>
            </BrowserRouter>
        </div>
    );
}

export default App;
