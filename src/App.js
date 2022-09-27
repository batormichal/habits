import './App.css';
import React from "react";
import HabitsForDay from "./habits/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddReadDataForm} from "./books/AddReadDataForm";
import {ReadDateTable} from "./books/ReadDateTable";
import {Menu} from "./Menu";
import {AddExerciseForm} from "./exercises/AddExerciseForm";
import {ActivitiesMenu} from "./activities/ActivitiesMenu";
import ActivitiesForm from "./activities/ActivitiesForm";
import ExercisesTable from "./exercises/ExercisesTable";
import {Series} from "./comics/Series";
import PublicationTable from "./comics/PublicationTable";
import StoryPage from "./comics/StoryPage";
import ReadingDataList from "./comics/ReadingDataList";
import Settings from "./settings/Settings";
import {MoviesDateTable} from "./movies/MoviesDateTable";


function App() {
    return (<div className="app">
        <BrowserRouter>
            <Menu/>
            <div className="container"><Routes>
                <Route element={<HabitsForDay key="habits"/>}
                       exact path="/"/>
                <Route element={<HabitsForDay key="habits"/>}
                       exact path="habits/day"/>
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
                <Route element={<Settings/>}
                       path="settings"/>
                <Route element={<MoviesDateTable/>}
                       path="movies/table"/>
                <Route element={<HabitsForDay key="small-habits" type="small"/>}
                       path="small-habits/day"/>
            </Routes></div>
        </BrowserRouter>
    </div>);
}

export default App;
