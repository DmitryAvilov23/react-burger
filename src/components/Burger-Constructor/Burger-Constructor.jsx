import React from 'react';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyles from './Burger-Constructor.module.css'

import { CART_DATA } from '../../utils/cart-data';
import { getIngredientsGroup } from '../../utils/get-ingredients-group';

import Cart from './components/Cart/Cart';
import Modal from '../Modal/Modal';
import OrderDetails from './components/Order-Details/Order-Details';

class BurgerConstructor extends React.Component {
    state = {
        cartData: CART_DATA,
        isModalVisible: false
    };

    handleOpenModal = () => {
        this.setState({...this.state, isModalVisible: true})
    }

    handleCloseModal = () => {
        this.setState({...this.state, isModalVisible: false})
    }

    render() {
        const buns = getIngredientsGroup(this.state.cartData, 'bun');
        const souces = getIngredientsGroup(this.state.cartData, 'souce');
        const mains = getIngredientsGroup(this.state.cartData, 'main');

        const mainCartContent = [...mains, ...souces];

        const orderID = '034536';

        const modal = (
            <Modal onClose={this.handleCloseModal} >
                <OrderDetails orderID={orderID} />
            </Modal>
        );

        return (
            <section className={BurgerConstructorStyles.constructor}>
                <Cart buns={buns} mainCartContent={mainCartContent}/>

                <div className={BurgerConstructorStyles.createOrder + " mt-10"}>
                    <legend className="text text_type_digits-medium pr-10">
                        <span className="pr-1"> 600 </span> <CurrencyIcon type="primary" />
                    </legend>

                    <Button onClick={this.handleOpenModal} htmlType="button" type="primary" size="large">
                        <span className={BurgerConstructorStyles.button__text + ' pl-5 pr-5'}> Оформить заказ </span> 
                    </Button>
                    
                </div>

                { this.state.isModalVisible && modal }
            </section>
        )
    }
}

export default BurgerConstructor;