import './App.css';
import React from "react";
import HabitsForDay from "./habits/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HabitsForMultipleDays from "./habits/HabitsForMultipleDays";
import {AddReadDataForm} from "./books/AddReadDataForm";
import ReadDateTable from "./books/ReadDateTable";
import Menu from "./Menu";
import HabitsStatistics from "./habits/HabitsStatistics";
import {AddExerciseForm} from "./exercises/AddExerciseForm";
import {ActivitiesMenu} from "./activities/ActivitiesMenu";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Menu/>
                <div className="container"><Routes>
                    <Route element={<HabitsForDay/>}
                           exact path="habits/day"/>
                    <Route element={<HabitsForMultipleDays/>}
                           path="habits/table"/>
                    <Route element={<HabitsStatistics/>}
                           path="habits/stats"/>
                    <Route element={<AddReadDataForm/>}
                           path="books/reading/add"/>
                    <Route element={<ReadDateTable/>}
                           path="books/reading/table"/>
                    <Route element={<AddExerciseForm/>}
                           path="exercises/add"/>
                    <Route element={<ActivitiesMenu/>}
                           path="activities/menu"/>
                </Routes></div>
            </BrowserRouter>
        </div>
    );
}

export default App;
