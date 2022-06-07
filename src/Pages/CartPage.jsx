import React, {useContext} from 'react';
import {useState} from "react";
import Header from "../Components/Header";
import {useNavigate} from "react-router-dom";
import {cartContext} from "../App";

const CartPage = () => {
    const navigate = useNavigate();
    const {pizzasInCart, setPizzasInCart} = useContext(cartContext)

    console.log(pizzasInCart);
    return (
        <div className="cart">
            <Header phrase={'Самая реактивная пицца'}/>
            {pizzasInCart.length > 0
                ?
                <div className="cart__wrap">
                    <div className="info">
                        <div className="cart__title">
                            <img src="./img/cart-page-cart.svg" alt=""/><h2>Корзина</h2>
                        </div>
                        <div className="cart__clear">
                            <img src="./img/trash-icon.svg" alt=""/><span> Очистить корзину</span></div>
                    </div>
                    <div className="pizzas-list">
                        {pizzasInCart.map((pizza) =>
                            <div className="pizza-cards" key={pizza.id}>
                                <img src={pizza.imageUrl} alt=""/>
                                <div className="pizza__title">
                                    <h4>{pizza.title}</h4>
                                    <span>{pizza.type === 0 ? 'тонкое ' : 'толстое '} тесто, {pizza.size} см.</span>
                                </div>
                                <div className="pizza__counter">
                                    <div className="pizza__counter-btn">-</div>
                                    {pizza.count}
                                    <div className="pizza__counter-btn">+</div>
                                </div>
                                <div className="pizza__price">{pizza.price * pizza.count} ₽</div>
                                <div className="pizza__delete"><span>+</span></div>
                            </div>
                        )}
                    </div>
                </div>
                : <div className="cart__wrap">
                    <div className="empty-cart">
                        <h1>Корзина пустая 😕</h1>
                        <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                        <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                        <img src="./img/empty-cart.png" alt="empty-cart-picture"/>
                        <div className="back-btn" onClick={() => navigate('/main')}>Вернуться назад</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartPage;
