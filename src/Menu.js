import React from 'react';
import {Link} from 'react-router-dom';


export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="path1">Nawyki</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/path2">Tabela
                            nawyków</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/path3">Dodaj
                            książkę</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/path4">Tabela
                            czytania</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/path5">Statystyki
                            nawyków</Link>
                    </li>
                </ul>

            </nav>
        );
    }
}
