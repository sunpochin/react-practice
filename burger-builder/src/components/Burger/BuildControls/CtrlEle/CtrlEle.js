import React from 'react';
import classes from './CtrlEle.css';

const CtrlEle = (props) => {
//    <div className={classes.BuildControl}>
    return (
        <div className={classes.CtrlEle}>
            <div className={classes.Label}> {props.label} </div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>

    );
};

//<div className = {classes.Label } >{props.label}</div>

export default CtrlEle;
