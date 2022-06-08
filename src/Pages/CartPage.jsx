import Header from "../Components/Header";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, clearCart, removeItem} from "../store/cartSlice";

const CartPage = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const clearCartConfirm = () => {
        // let variable = confirm('Очистить корзину?');
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearCart())
        };
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
                    <div className="pizzas-list">
                        {cartItems.map((pizza, index) =>
                            <div className="pizza-cards" key={index}>
                                <img src={pizza.imageUrl} alt=""/>
                                <div className="pizza__title">
                                    <h4>{pizza.title}</h4>
                                    <span>{pizza.type === 0 ? 'тонкое ' : 'толстое '} тесто, {pizza.size} см.</span>
                                </div>
                                <div className="pizza__counter">
                                    <div className="pizza__counter-btn" onClick={() => dispatch(decrement(pizza))}>-
                                    </div>
                                    {pizza.count}
                                    <div className="pizza__counter-btn" onClick={() => dispatch(increment(pizza))}>+
                                    </div>
                                </div>
                                <div className="pizza__price">{pizza.price * pizza.count} ₽</div>
                                <div className="pizza__delete" onClick={()=> dispatch(removeItem(pizza))}><span>+</span></div>
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
