import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'


export const Menu = () => <nav className="navigation-bar">
    <Link to="/habits/day"><span>Nawyki</span></Link>
    <Link to="/habits/table"><span>Tabela nawyków</span></Link>
    <Link to="/habits/stats"><span>Statystyki nawyków</span></Link>
    <Link to="/books/reading/add"><span>Dodaj książkę</span></Link>
    <Link to="/books/reading/table"><span>Tabela czytania</span></Link>
    <Link to="/exercises/add"><span>Nowe ćwiczenie</span></Link>
    <Link to="/exercises/table"><span>Tabela ćwiczeń</span></Link>
    <Link to="/activities/menu"><span>Aktywności</span></Link>
    <Link to="/comics/table"><span>Komiksy</span></Link>
    <Link to="/comics/reading-list"><span>Czytane komiksy</span></Link>
</nav>

