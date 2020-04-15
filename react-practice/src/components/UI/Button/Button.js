import React from 'react';

import classes from './Button.css';

const button = (props) => (
    // console.log('btn: ', [classes.Button].join(' ')),
    // console.log('btnType: ', [classes[props.btnType]].join(' ')),
    // console.log('joined: ', [classes.Button, classes[props.btnType]].join(' ')),
    // a = [classes.Button],
    // b = classes[props.btnType],
    // c = [a, b].join(' '),
    // className={[classes.Button, classes[props.btnType]].join(' ')}
//    className={[classes[props.btnType]].join(' ')}
    <button
//    className={[classes.Button]}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;