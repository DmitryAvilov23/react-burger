import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientsStyles from '../../Burgrer-Ingredients.module.css'

import IngredientGroup from '../Ingredient-Group/Ingredient-Group'
;
import { INGREDIENT_GROUPS } from '../../../../utils/ingredient-groups';
import { getIngredientsGroup } from '../../../../utils/get-ingredients-group';
import { productTypes } from '../../../../utils/types';


class IngredientGroups extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { ingredientsData } = this.props;
        const groups = [...INGREDIENT_GROUPS];

        return (
            <div className={BurgerIngredientsStyles.burgerIngredients}>
                {groups.map(g => (
                    <IngredientGroup title={g.name} groupData={getIngredientsGroup(ingredientsData, g.id)} groupID={g.id} />
                ))}
            </div>
        )
    }
}

IngredientGroups.protoType = {
    ingredientsData: PropTypes.array(productTypes)
}

export default IngredientGroups;