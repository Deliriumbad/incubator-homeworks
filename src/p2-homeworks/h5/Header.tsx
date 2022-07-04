import React from 'react'
import {PATH} from "./RoutesPages";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {

    return (
        <nav className={s.header}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link}  to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <div className={s.block}>Menu</div>
        </nav>
    );
}

export default Header
