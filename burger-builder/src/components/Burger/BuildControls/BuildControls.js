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
            Current Price: {props.price}
        {controls.map(ctrl => (
            <CtrlEle 
                key = {ctrl.label} 
                label = {ctrl.label}
                added = {() => props.ingredientAdded(ctrl.type) }
                deduced = {() => props.ingredientDeduced(ctrl.type) }
                disabled = {props.disabled[ctrl.type]}
            >
            </CtrlEle>
        ))}
        <button className={classes.OrderButton}
            disabled={!props.purchaseable}>ORDER NOW</button>
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

