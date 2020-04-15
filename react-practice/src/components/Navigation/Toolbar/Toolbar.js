import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <div>LOGO</div>
        <NavigationItems/>
        <nav>
            <ul>...</ul>
        </nav>
    </header>
);


export default toolbar;


