import React from 'react';

import MyButton from "./MyButton/MyButton";

const EmptyCart = () => {
    return (
        <div className="cart__wrap">
            <div className="empty-cart">
                <h1>Корзина пустая 😕</h1>
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src="./img/empty-cart.png" alt="empty-cart-picture"/>
                <MyButton way={'/main'} type={2}>Вернуться назад</MyButton>
            </div>
        </div>
    );
};

export default EmptyCart;
