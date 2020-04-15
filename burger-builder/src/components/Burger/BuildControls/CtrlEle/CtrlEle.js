import React from 'react';
import classes from './CtrlEle.css';

const CtrlEle = (props) => {
//    <div className={classes.BuildControl}>
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}> {props.label} </div>
            <button className={classes.Less}
                onClick={props.deduced} 
                disabled={props.disabled}>Less</button> 

            <button className={classes.More} 
                onClick={props.added}>More</button>
        </div>

    );
};

//<div className = {classes.Label } >{props.label}</div>

export default CtrlEle;
