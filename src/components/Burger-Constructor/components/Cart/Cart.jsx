import React from "react";
import PropTypes from "prop-types";

import ConstructorElem from '../Constructor-Elem/Constructor-Elem';

import BurgerConstructorStyles from '../../Burger-Constructor.module.css'

import { productTypes } from "../../../../utils/types";

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { mainCartContent, buns } = this.props;

        return (
            <div className={BurgerConstructorStyles.constructor__cart}>
                <ul className={BurgerConstructorStyles.constructor__list + ' pl-0 order'}  >
                    <ConstructorElem 
                        title={buns[0]?.name + ' (верх)'}
                        img={buns[0]?.image_mobile}
                        price={buns[0]?.price}
                        isLocked={true}
                        type="top"
                    />
                </ul>

                <ul className={BurgerConstructorStyles.constructor__list + ' ' + BurgerConstructorStyles.constructor__list_scroll + ' pl-0 order scroll'}  >
                    { mainCartContent.map((item) => (
                        <ConstructorElem 
                            title={item.name}
                            img={item.image_mobile}
                            price={item.price}
                            isLocked={item.type === 'bun'}
                        />
                    ))}
                </ul>

                <ul className={BurgerConstructorStyles.constructor__list + ' pl-0 order'}  >
                    <ConstructorElem 
                        title={buns[0]?.name + ' (низ)'}
                        img={buns[0]?.image_mobile}
                        price={buns[0]?.price}
                        isLocked={true}
                        type="bottom"
                    />
                </ul>
            </div>
        )
    }
}

Cart.protoType = {
    mainCartContent: PropTypes.arrayOf(productTypes),
    buns: PropTypes.arrayOf(productTypes)
}

export default Cart;