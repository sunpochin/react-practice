import React from 'react';
import Item from './Item/Item';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <Item link="/">Checkout</Item>
        <Item link="/" active>Burger Builder</Item>
        <Item link="/" active>Another link</Item>
        <li><a href='/'>A ilnk</a>

        </li>
    </ul>

);


export default navigationItems;

