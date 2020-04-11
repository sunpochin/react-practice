import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
    

    console.log('transformedIngredients: ', transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            {/* <BurgerIngredient type='meat' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='bacon' /> */}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};


export default burger;

