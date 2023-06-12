import React from "react";
import PropTypes from 'prop-types';

import BurgerConstructorStyles from '../../Burger-Constructor.module.css';

import successImg from '../../../../images/graphics.svg';

class OrderDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { orderID } = this.props;

        return (
            <>
                <h2 className={ BurgerConstructorStyles.order__title + " text text_type_digits-large p-10"}>
                    { orderID }
                </h2>

                <p className="text text_type_main-medium pb-15"> идентификатор заказа </p>

                <img className="pb-15" src={successImg} alt="status: ok" />

                <span className="text text_type_main-default pb-2"> Ваш заказ начали готовить </span>

                <span className="text text_type_main-default text_color_inactive pb-30"> Дождитесь готовности на орбитальной станции </span>
            </>
        )
    }
}

OrderDetails.protoType = {
    orderID: PropTypes.string,
}

export default OrderDetails;