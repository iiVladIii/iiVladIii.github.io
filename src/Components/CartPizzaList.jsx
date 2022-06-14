import React from 'react';
import {decrement, increment, removeItem} from "../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const CartPizzaList = ({updateInfo}) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const dough = (pizza) => {
      switch (pizza.size) {
          case 26: return 'тонкое'
          case 30: return 'среднее'
          case 40: return 'толстое'
      }
    }
    return (
        <div className="pizzas-list" onClick={updateInfo}>
            {cartItems.map((pizza, index) =>
                <div className="pizza-cards" key={index}>
                    <img src={pizza.imageUrl} alt=""/>
                    <div className="pizza__title">
                        <h4>{pizza.title}</h4>
                        <span>{dough(pizza)} тесто, {pizza.size} см.</span>
                    </div>
                    <div className="pizza__counter">
                        <div className="pizza__counter-btn" onClick={() =>
                            dispatch(decrement(pizza))}>-
                        </div>
                        {pizza.count}
                        <div className="pizza__counter-btn" onClick={() => dispatch(increment(pizza))}>+
                        </div>
                    </div>
                    <div className="pizza__price">{pizza.price * pizza.count} ₽</div>
                    <div className="pizza__delete" onClick={() => dispatch(removeItem(pizza))}><span>+</span></div>
                </div>
            )}
        </div>
    );
};

export default CartPizzaList;
