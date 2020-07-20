import React from 'react';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    props.show && (drawerClasses = 'side-drawer open');
    return (
        <nav className={ drawerClasses } >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About me</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )

};

export default SideDrawer;