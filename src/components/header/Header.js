import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Backdrop from './backdrop/Backdrop';

import { Link, animateScroll as scroll } from "react-scroll";

import AGLogo from '../../images/logo-ag-imp.svg';

class Header extends React.Component {
    state = {
        drawerOpen: false,
        headerNavigationSmall: false,
        mediumDevice: false
    }
    toggleDrawerHandler = () => {
        this.setState((prevState) => {
            return {
                drawerOpen: !prevState.drawerOpen
            }
        })
    };

    backdropClickHandler = () => {
        this.setState({ drawerOpen: false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerNavigationSmall: true
            });
        } else {
            this.setState({
                headerNavigationSmall: false
            });
        }
    }

    handleResize = () => {
        if (window.innerWidth < 768) {
            this.setState({
                mediumDevice: true
            });
        } else {
            this.setState({
                mediumDevice: false
            });
        }
    }



    render() {
        let backdrop;
        if(this.state.drawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        let headerNavigationItemsClasses = "header__navigation--items";
        let logoClasses = "logo";
        let headerNavigationClasses = "header__navigation";
        this.state.headerNavigationSmall &&  (headerNavigationClasses = "header__navigation small " );
        this.state.headerNavigationSmall &&  (headerNavigationItemsClasses = "header__navigation--items small " );
        this.state.headerNavigationSmall &&  (logoClasses = "logo small" );

        return (
            <header>
                <nav className={ headerNavigationClasses } >
                    <div><img src={AGLogo} alt="Logo" className={ logoClasses }/></div>
                    <div className="spacer" />
                    <div className={ headerNavigationItemsClasses }>

                            <Link 
                                to="jumbotron"
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link" 
                            >Home</Link>
                            <Link 
                                to="about-me" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link"
                            >About me</Link>
                            <Link 
                                to="portfolio" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link"
                            >Portfolio</Link>
                            <Link 
                                to="contact" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link"
                            >Contact</Link>

                    </div>
                    <div><DrawerToggleButton drawerClickHandler={this.toggleDrawerHandler} /></div>
                    <SideDrawer show={this.state.drawerOpen}/>
                    { backdrop }
                </nav>
            </header>
        );
    };
}


export default Header;