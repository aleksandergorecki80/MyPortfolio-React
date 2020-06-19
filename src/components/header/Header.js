import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Backdrop from './backdrop/Backdrop';

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
            console.log(this.state.mediumDevice);
        } else {
            this.setState({
                mediumDevice: false
            });
            console.log(this.state.mediumDevice)
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
                        <BrowserRouter>
                            <NavLink to="/" activeClassName="is-avtive" className="header__nav-link" exact={true}>Home</NavLink>
                            <NavLink to="/about-me" activeClassName="is-avtive" className="header__nav-link">About me</NavLink>
                            <NavLink to="/portfolio" activeClassName="is-avtive" className="header__nav-link">Portfolio</NavLink>
                            <NavLink to="/contact" activeClassName="is-avtive" className="header__nav-link">Contact</NavLink>
                        </BrowserRouter>
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