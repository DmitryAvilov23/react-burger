import React from "react";
import PropTypes from 'prop-types';

import MainStyles from './Main.module.css'

import BurgerIngredients from '../Burger-Ingredients/Burger-Ingredients';
import BurgerConstructor from '../Burger-Constructor/Burger-Constructor';
import { productTypes } from "../../utils/types";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { productsData } = this.props;

        return (
            <main className={MainStyles.main + ' container'}>
                <h1 className="text text_type_main-large pt-10 pb-5">
                    Соберите бургер
                </h1>

                <div className={MainStyles.main__content}>
                    <BurgerIngredients data={productsData} />
                    <BurgerConstructor data={productsData} />
                </div>
            </main>
        )
    }
}

Main.protoType = {
    productsData: PropTypes.arrayOf(productTypes).isRequired
}

export default Main;