import React from "react";

import MainStyles from './Main.module.css'

import BurgerIngredients from '../Burger-Ingredients/Burger-Ingredients';
import BurgerConstructor from '../Burger-Constructor/Burger-Constructor';

class Main extends React.Component {
    render() {
        return (
            <main className={MainStyles.main + ' container'}>
                <h1 className="text text_type_main-large pt-10 pb-5">
                    Соберите бургер
                </h1>

                <div className={MainStyles.main__content}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </div>
            </main>
        )
    }
}

export default Main;