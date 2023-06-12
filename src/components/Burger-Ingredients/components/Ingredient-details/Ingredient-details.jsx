import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientsStyles from '../../Burgrer-Ingredients.module.css';

class IngredientDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, calories, fat, carbohydrates, proteins } = this.props;

        return (
            <div>
                <img src={image} className={BurgerIngredientsStyles.image} alt="product image" />
                <h3 className={BurgerIngredientsStyles.details__title + ' text text_type_main-medium pt-4 pb-8'}>{name}</h3>
                
                <div className={BurgerIngredientsStyles.details__infoWrapper}>
                    <article className={BurgerIngredientsStyles.details__info + ' text_color_inactive'}>
                        <h5 className='text text_type_main-default pb-2'> Калории, ккал </h5>
                        <legend className='text text_type_digits-default'>{ calories }</legend>
                    </article>

                    <article className={BurgerIngredientsStyles.details__info + ' text_color_inactive'}>
                        <h5 className='text text_type_main-default pb-2'> Белки, г </h5>
                        <legend className='text text_type_digits-default'>{ proteins }</legend>
                    </article>

                    <article className={BurgerIngredientsStyles.details__info + ' text_color_inactive'}>
                        <h5 className='text text_type_main-default pb-2'> Жиры, г </h5>
                        <legend className='text text_type_digits-default'>{ fat }</legend>
                    </article>

                    <article className={BurgerIngredientsStyles.details__info + ' text_color_inactive'}>
                        <h5 className='text text_type_main-default pb-2'> Углеводы, г </h5>
                        <legend className='text text_type_digits-default'>{ carbohydrates }</legend>
                    </article>
                </div>

            </div>
        );
    }
}

IngredientDetails.protoType = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired
}

export default IngredientDetails;