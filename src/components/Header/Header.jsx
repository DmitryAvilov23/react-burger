import React from 'react';

import { Logo, Button, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderStyles from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header className={HeaderStyles.header}>
                <div className="container">
                    <nav className={HeaderStyles.menu}>
                        <Button extraClass='button active left' htmlType="button" type="secondary" size="medium">
                            <BurgerIcon extraClass='button__icon' type="primary" />
                            <span className='button__text primary'> Конструктор </span> 
                        </Button>

                        <Button extraClass='button' htmlType="button" type="secondary" size="medium">
                            <ListIcon extraClass='button__icon' type="secondary" />
                            <span className='button__text'> Лента заказов </span> 
                        </Button>

                        <Button extraClass='button right' htmlType="button" type="secondary" size="medium">
                            <ProfileIcon extraClass='button__icon' type="secondary" />
                            <span className='button__text'> Личный кабинет </span> 
                        </Button>
                    </nav>

                    <a href='/' className={HeaderStyles.logo}>
                        <Logo />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;