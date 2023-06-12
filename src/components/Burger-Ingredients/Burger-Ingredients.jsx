import React from 'react';
import PropTypes from 'prop-types';

import IngredientGroups from './components/Ingredient-Groups/Ingredient-Groups';
import Tabs from './components/Tabs/Tabs';

import { productTypes } from '../../utils/types';

class BurgerIngredients extends React.Component {
    state = {
        activeTab: 'bun'
    };

    constructor(props) {
        super(props);

        this.updateCurrentTab = this.updateCurrentTab.bind(this);
    }

    scrollToGroup = (id) => {
        const groupNode = document.getElementById(id);
        groupNode.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    updateCurrentTab = (id) => {
        this.setState({ ...this.state, activeTab: id })

        this.scrollToGroup(id);
    }

    render() {
        const { data } = this.props;

        return (
            <section id='groupsSection'>
                <Tabs activeTab={this.state.activeTab} updateCurrentTab={this.updateCurrentTab} />
                <IngredientGroups ingredientsData={data}/>
            </section>
        )
    }
}

BurgerIngredients.protoType = {
    data: PropTypes.arrayOf(productTypes).isRequired
}

export default BurgerIngredients;