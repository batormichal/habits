import './App.css';
import React from "react";
import HabitsForDay from "./habits/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HabitsForMultipleDays from "./habits/HabitsForMultipleDays";
import {AddReadDataForm} from "./books/AddReadDataForm";
import {ReadDateTable} from "./books/ReadDateTable";
import {Menu} from "./Menu";
import {HabitsStatistics} from "./habits/HabitsStatistics";
import {AddExerciseForm} from "./exercises/AddExerciseForm";
import {ActivitiesMenu} from "./activities/ActivitiesMenu";
import ActivitiesForm from "./activities/ActivitiesForm";
import ExercisesTable from "./exercises/ExercisesTable";
import {Series} from "./comics/Series";
import PublicationTable from "./comics/PublicationTable";
import StoryPage from "./comics/StoryPage";
import ReadingDataList from "./comics/ReadingDataList";
import {ReadComicsBookTable} from "./books/ReadComicsBookTable";
import Settings from "./settings/Settings";


function App() {
    return (<div className="app">
        <BrowserRouter>
            <Menu/>
            <div className="container"><Routes>
                <Route element={<HabitsForDay/>}
                       exact path="/"/>
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
                <Route element={<ActivitiesForm/>}
                       path="activities/form"/>
                <Route element={<ExercisesTable/>}
                       path="exercises/table"/>
                <Route element={<Series/>}
                       path="comics/table"/>
                <Route element={<PublicationTable/>}
                       path="comics/publication/:id"/>
                <Route element={<StoryPage/>}
                       path="comics/story/:id"/>
                <Route element={<ReadingDataList/>}
                       path="comics/reading-list"/>
                <Route element={<ReadComicsBookTable/>}
                       path="comics-books/read-data"/>
                <Route element={<Settings/>}
                       path="settings"/>
            </Routes></div>
        </BrowserRouter>
    </div>);
}

export default App;
