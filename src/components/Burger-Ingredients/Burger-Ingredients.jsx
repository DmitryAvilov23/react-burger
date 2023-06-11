import React from 'react';

import IngredientGroups from './components/Ingredient-Groups/Ingredient-Groups';
import Tabs from './components/Tabs/Tabs';
import { API_URL } from '../../utils/api';

class BurgerIngredients extends React.Component {
    state = {
        data: [],
        activeTab: 'bun'
    };

    constructor(props) {
        super(props);

        this.updateCurrentTab = this.updateCurrentTab.bind(this);
    }

    async componentDidMount() {
        await this.getIngredients();
    }

    getIngredients = async () => {
        const url = API_URL;

        try {
            const response = await fetch(url);

            if (response.ok) {
                const { data } = await response.json();
                this.setState({ ...this.state, data });
            } else {
                this.setState({ ...this.state, data: []  });
                console.error('error response', response.status);
            }

        } catch (e) {
            console.error('ERROR', e);
            this.setState({ ...this.state, data: []  });
        }
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
        return (
            <section id='groupsSection'>
                <Tabs activeTab={this.state.activeTab} updateCurrentTab={this.updateCurrentTab} />
                <IngredientGroups ingredientsData={this.state.data}/>
            </section>
        )
    }
}

export default BurgerIngredients;