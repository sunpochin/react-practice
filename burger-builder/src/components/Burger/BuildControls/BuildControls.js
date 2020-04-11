import React from 'react';
import classes from './BuildControls.css';
import CtrlEle from './CtrlEle/CtrlEle';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];


const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls} >
        {controls.map(ctrl => (
            <CtrlEle key={ctrl.label} label = {ctrl.label}>

            </CtrlEle>
        ))}
        </div>
    );
};

// const BuildControls = (props) => {

//     <div className={classes.BuildControls} >
//             BuildControls
//     ssss
//         {/* {controls.map(ctrl => (
//             <CtrlEle key={ctrl.label} label = {ctrl.label}  ></CtrlEle>
//         ))} */}

//     </div>
// };


export default BuildControls;

