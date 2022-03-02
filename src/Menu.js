import React from 'react';
import {Link} from 'react-router-dom';


export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link active"
                              to="/habits/day">Nawyki</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/habits/table">Tabela
                            nawyków</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/habits/stats">Statystyki
                            nawyków</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/books/reading/add">Dodaj
                            książkę</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/books/reading/table">Tabela
                            czytania</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/exercises/add">Nowe
                            ćwiczenie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/exercises/table">Tabela
                            ćwiczeń</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"
                              to="/activities/menu">Aktywności</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"
                              to="/activities/form">Aktywności</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"
                              to="/comics/table">Komiksy</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
