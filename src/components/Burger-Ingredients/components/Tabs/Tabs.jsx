import React from "react";
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { INGREDIENT_GROUPS } from "../../../../utils/ingredient-groups";
import BurgerIngredientsStyles from "../../Burgrer-Ingredients.module.css";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const groups = [...INGREDIENT_GROUPS];
        const { activeTab } = this.props

        return (
            <nav className={BurgerIngredientsStyles.tabs + ' pb-10'}>
                { groups.map(g => (
                    <Tab onClick={() => this.props.updateCurrentTab(g.id)} 
                         value={g.id} 
                         active={ g.id === activeTab }>
                        {g.name}
                    </Tab>
                )) }
            </nav>
        )
    }
}

Tabs.protoType = {
    activeTab: PropTypes.string,
    updateCurrentTab: PropTypes.object
}

export default Tabs;