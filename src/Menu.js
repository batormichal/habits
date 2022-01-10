import React from 'react';
import {Link} from 'react-router-dom';


export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/habits/day">Nawyki</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/habits/table">Tabela
                            nawyków</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/habits/stats">Statystyki
                            nawyków</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books/reading/add">Dodaj
                            książkę</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books/reading/table">Tabela
                            czytania</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exercises/add">Nowe
                            ćwiczenie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/activities/menu">Aktywności</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
