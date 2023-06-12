import React from "react";
import PropTypes from "prop-types";

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsStyles from '../../Burgrer-Ingredients.module.css';

import Modal from "../../../Modal/Modal";
import IngredientDetails from "../Ingredient-details/Ingredient-details";

class Ingredient extends React.Component {
    state = {
        isModalVisible: false
    }

    constructor(props) {
        super(props);
    }

    handleOpenModal = () => {
        this.setState({ isModalVisible: true })
    }

    handleCloseModal = () => {
        this.setState({ isModalVisible: false })
    }

    render() {
        const { image, price, name, image_large, calories, fat, carbohydrates, proteins  } = this.props;

        const modal = (
            <Modal onClose={this.handleCloseModal} title="Детали ингредиента">
                <IngredientDetails
                    name={name}
                    image={image_large}
                    calories={calories}
                    proteins={proteins}
                    fat={fat}
                    carbohydrates={carbohydrates}
                />
            </Modal>
        );

        return (
            <>
                <li className={BurgerIngredientsStyles.list__item + " pb-8"} onClick={this.handleOpenModal}>
                    <Counter count={1} size="default" extraClass="m-1" />
                                                
                    <img src={image} alt="product image" className="pb-1"/>
                    <legend className={BurgerIngredientsStyles.list__itemPrice + " text text_type_digits-default pb-1"}>
                        <span className="pr-1"> {price} </span> <CurrencyIcon type="primary" />
                    </legend>
                    <h4 className="text text_type_main-default">{name}</h4>
                </li>

                { this.state.isModalVisible &&  modal}
            </>
        )
    }
}

Ingredient.protoType = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired
}

export default Ingredient;