import React from 'react';
import{ NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';


const Header = () => (
    <header>
        <AppBar
            position="fixed"
            className="header__app-bar"
        >
        <div><h1>Logo here</h1></div>
        <div className="header__nav-group">
            <NavLink to="/" activeClassName="is-avtive" className="header__nav-link" exact={true}>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-avtive" className="header__nav-link">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-avtive" className="header__nav-link">Contact</NavLink>
        </div> 
        </AppBar>
   </header>
);

export default Header;