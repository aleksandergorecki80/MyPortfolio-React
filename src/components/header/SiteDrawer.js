import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { NavLink } from 'react-router-dom';

const SiteDrawer = (props) => (
    <Drawer
        anchor="right"
        open={props.open}
        onClose={()=>props.onClose(false)}
    >
         <List 
            component="nav"
        >
            <ListItem button 
                onClick={()=> console.log('Home')}
            > Home </ListItem>
            <ListItem button 
                onClick={()=> console.log('About me')}
            > About me </ListItem>
            <ListItem button 
                onClick={()=> console.log('Portfolio')}
            > Portfolio </ListItem>
            <ListItem button 
                onClick={()=> console.log('Contact')}
            > Contact </ListItem>

            {/* <NavLink to="/" activeClassName="is-avtive" className="header__nav-link" exact={true}>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-avtive" className="header__nav-link">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-avtive" className="header__nav-link">Contact</NavLink> */}
        </List>
    </Drawer>
);

export default SiteDrawer;