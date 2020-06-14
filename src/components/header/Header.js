import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SiteDrawer from './SiteDrawer';

class Header extends React.Component {
    state = {
        drawerOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <header>
                <AppBar
                    position="fixed"
                >
                    <Toolbar className="header__app-bar">
                        <div><h1>Logo here</h1></div>
                        <div className="header__nav-group">
                            <NavLink to="/" activeClassName="is-avtive" className="header__nav-link" exact={true}>Home</NavLink>
                            <NavLink to="/portfolio" activeClassName="is-avtive" className="header__nav-link">Portfolio</NavLink>
                            <NavLink to="/contact" activeClassName="is-avtive" className="header__nav-link">Contact</NavLink>
                            <IconButton
                                aria-label="Menu"
                                onClick={() => this.toggleDrawer(true)}
                            >
                                <MenuIcon
                                    style={{ fontSize: 25 }}
                                    className="header__menu-icon"
                                />
                            </IconButton>
                        </div>
                        <SiteDrawer
                            open={this.state.drawerOpen}
                            onClose={this.toggleDrawer}
                        />
                    </Toolbar>
                </AppBar>
            </header>
        );
    };
}


export default Header;