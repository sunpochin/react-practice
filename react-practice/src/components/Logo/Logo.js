import React from 'react';

import burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

//<img src={'../../assets/images/burger-logo.png'} alt='MyBurger'/> 
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt='MyBurger'/> 
    </div>

);

export default logo;

