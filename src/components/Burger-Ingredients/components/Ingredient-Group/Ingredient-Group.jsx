import React from "react";
import PropTypes from "prop-types";

import BurgerIngredientsStyles from '../../Burgrer-Ingredients.module.css';
import Ingredient from "../Ingredient/Ingredient";

import { productTypes } from "../../../../utils/types";

class IngredientGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { groupData, title, groupID } = this.props;

        return (
            <div id={groupID}>
                <h3 className="text text_type_main-medium pb-6"> { title } </h3>

                <ul className={BurgerIngredientsStyles.list + " pl-4"}>
                    { groupData.map(product => {
                        return (
                            <Ingredient {...product}/>
                        );
                    }) }
                </ul>
            </div>
        )
    }
}

IngredientGroup.protoType = {
    groupData: PropTypes.arrayOf(productTypes),
    title: PropTypes.string.isRequired,
    groupID: PropTypes.string.isRequired
}

export default IngredientGroup