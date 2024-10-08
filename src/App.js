import './App.css';
import React from "react";
import HabitsForDay from "./habits/day/HabitsForDay";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddReadDataForm} from "./books/literature/AddReadDataForm";
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
import {PeriodReadingStats} from "./books/literature/statistics/PeriodReadingStats";
import {DefaultTable} from "./table/DefaultTable";
import {MainReadData} from "./books/MainReadData";
import {ListOfSeries} from "./comics/ListOfSeries";
import Sample from "./books/Sample";
import {ReadDateTable} from "./books/ReadDateTable";
import ReadDataTable from "./books/ReadDataTable";
import {MainReadTable} from "./books/MainReadTable";

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
                <Route element={<MainReadData/>}
                       path="books/reading/table"/>
                <Route element={<ActivitiesMenu/>}
                       path="activities"/>
                <Route element={<ActivitiesForm/>}
                       path="activities/form"/>
                <Route element={<ListOfSeries/>}
                       path="comics/table"/>
                <Route element={<PublicationTable/>}
                       path="comics/publication/:id"/>
                <Route element={<StoryPage/>}
                       path="comics/story/:id"/>
                <Route element={<ReadingDataTable/>}
                       path="comics/reading-list"/>
                <Route element={<Series/>}
                       path="comics/series/:name"/>
                <Route element={<PeriodReadingStats/>} path="books/period"/>
                <Route element={<Settings/>}
                       path="settings"/>
                <Route element={<MoviesDateTable/>}
                       path="movies/table"/>
                <Route element={<HabitsForDay key="small-habits" type="small"/>}
                       path="small-habits/day"/>
                <Route element={<HabitsTable/>} path='habits/table'/>
                <Route element={<DefaultTable/>} path='table'/>
                <Route element={<MainReadTable/>} path='table/example'/>
            </Routes></div>
        </BrowserRouter>
    </div>);
}

export default App;
