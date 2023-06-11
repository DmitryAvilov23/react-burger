import React from "react";
import PropTypes from "prop-types";

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyles from "../../Burger-Constructor.module.css";

class ConstructorElem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { img, title, price, isLocked, type } = this.props;

        return (
            <li style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', position: 'relative' }}>
                
                { !isLocked && (
                    <button className={BurgerConstructorStyles.constructor__dragBtn}>
                        <DragIcon type="primary" /> 
                    </button>
                )}

                <ConstructorElement
                    type={type}
                    extraClass="ml-10"
                    text={title}
                    price={price}
                    thumbnail={img}
                    isLocked={isLocked}
                />
            </li>
        );
    }
}

ConstructorElem.protoType = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isLocked: PropTypes.bool,
    type: PropTypes.string
}

export default ConstructorElem;