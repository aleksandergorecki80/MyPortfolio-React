import React from 'react';
import{ NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-avtive" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-avtive">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-avtive">Contact</NavLink>
    </header>
);

export default Header;