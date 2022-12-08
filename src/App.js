import './App.css';
import React from "react";
import HabitsForDay from "./habits/day/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddReadDataForm} from "./books/AddReadDataForm";
import {ReadDateTable} from "./books/ReadDateTable";
import {Menu} from "./Menu";
import {ActivitiesMenu} from "./activities/ActivitiesMenu";
import {ActivitiesForm} from "./activities/ActivitiesForm";
import {Series} from "./comics/Series";
import PublicationTable from "./comics/PublicationTable";
import StoryPage from "./comics/StoryPage";
import Settings from "./settings/Settings";
import {MoviesDateTable} from "./movies/MoviesDateTable";
import HabitsTable from "./habits/table/HabitsTable";
import {ReadingDataTable} from "./comics/ReadingDataTable";
import {PeriodReadingStats} from "./books/statistics/PeriodReadingStats";
import {DefaultTable} from "./activities/table/DefaultTable";


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
                <Route element={<ActivitiesMenu/>}
                       path="activities/menu"/>
                <Route element={<ActivitiesForm/>}
                       path="activities/form"/>
                <Route element={<Series/>}
                       path="comics/table"/>
                <Route element={<PublicationTable/>}
                       path="comics/publication/:id"/>
                <Route element={<StoryPage/>}
                       path="comics/story/:id"/>
                <Route element={<ReadingDataTable/>}
                       path="comics/reading-list"/>
                <Route element={<PeriodReadingStats/>} path="books/period"/>
                <Route element={<Settings/>}
                       path="settings"/>
                <Route element={<MoviesDateTable/>}
                       path="movies/table"/>
                <Route element={<HabitsForDay key="small-habits" type="small"/>}
                       path="small-habits/day"/>
                <Route element={<HabitsTable/>} path='habits/table'/>
                <Route element={<DefaultTable/>} path='table'/>
            </Routes></div>
        </BrowserRouter>
    </div>);
}

export default App;
