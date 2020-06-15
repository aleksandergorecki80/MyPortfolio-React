import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SiteDrawer from './SiteDrawer';

import AGLogo from '../../images/logo-ag-imp.svg';

class Header extends React.Component {
    state = {
        drawerOpen: false,
        headerShow: true
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0 ){
            this.setState({
                headerShow: false
            });
        } else {
            this.setState({
                headerShow: true
            });
        }
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
                    <Toolbar 
                        className={this.state.headerShow ? "header__app-bar" : "header__app-bar-small"} 
                    >
                        <div><img src={AGLogo} alt="Logo" /></div>
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