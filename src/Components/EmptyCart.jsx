import React from 'react';
import {useNavigate} from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className="cart__wrap">
            <div className="empty-cart">
                <h1>Корзина пустая 😕</h1>
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src="./img/empty-cart.png" alt="empty-cart-picture"/>
                <div className="back-btn" onClick={() => navigate('/main')}>Вернуться назад</div>
            </div>
        </div>
    );
};

export default EmptyCart;
