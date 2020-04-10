import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
                    burger
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='bread-bottom' />
            bread
        </div>
    );
};


export default burger;

