import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'


export const Menu = () => <nav className="navigation-bar">
    <div className="menu-div"></div>
    <Link to="/habits/day"><span>Nawyki</span></Link>
    <Link to="/habits/table"><span>Tabela</span></Link>
    <Link to="/books/reading/table"><span>Książki</span></Link>
    <Link to="/books/period"><span>Statystyki książkek</span></Link>
    <Link to="/movies/table"><span>Filmy</span></Link>
    <Link to="/activities"><span>Aktywność</span></Link>
    <Link to="/comics/table"><span>Komiksy</span></Link>
    <Link to="/comics/reading-list"><span>Czytane komiksy</span></Link>
    <Link to="/table"><span>Default table</span></Link>
</nav>

