import React from "react";
import Header from "../Components/Header";
import {useDispatch, useSelector} from "react-redux";
import {cartInfo, clearCart} from "../store/cartSlice";
import EmptyCart from "../Components/EmptyCart";
import CartPizzaList from "../Components/CartPizzaList";
import MyButton from "../Components/MyButton/MyButton";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const cartPrice = useSelector(state => state.cart.cartPrice);
    const dispatch = useDispatch();

    const clearCartConfirm = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearCart());
        }
    };

    const updateInfo = () => {
        dispatch(cartInfo());
    };
    return (
        <div className="cart">
            <Header phrase={'Самая реактивная пицца'}/>
            {cartItems.length > 0
                ?
                <div className="cart__wrap">
                    <div className="info">
                        <div className="cart__title">
                            <img src="./img/cart-page-cart.svg" alt=""/><h2>Корзина</h2>
                        </div>
                        <div className="cart__clear" onClick={() => clearCartConfirm()}>
                            <img src="./img/trash-icon.svg" alt=""/><span> Очистить корзину</span></div>
                    </div>
                    <CartPizzaList updateInfo={updateInfo}/>
                    <div className="total">
                        <div className={'total__count'}>Всего пицц: <span>{cartCounter} шт.</span></div>
                        <div className={'total__price'}>Сумма заказа: <span>{cartPrice} ₽</span></div>
                    </div>
                    <div className="btns">
                        <MyButton type={0} way={'/main'}>Вернуться назад</MyButton>
                        <MyButton type={1}>Оплатить сейчас</MyButton>
                    </div>
                </div>
                : <EmptyCart/>
            }
            <div className="home-wrap"></div>
        </div>
    );
};

export default CartPage;
