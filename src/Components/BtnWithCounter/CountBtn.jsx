import React, {useEffect, useMemo, useState} from 'react';
import cl from './CountBtn.module.scss';
import {useSelector} from "react-redux";

const CountBtn = ({addToCart, pizza, children}) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const [btnStyles, setBtnStyles] = useState([cl.btnWrap]);
    const [plusStyles, setPlusStyles] = useState([cl.plus]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        cartItems.map((element) => {
            if (element.id === pizza.id) {
                setCount(count + element.count);
            }
        });
    }, []);

    useMemo(() => {
        if (count > 0) {
            setBtnStyles([...btnStyles, cl.active]);
            setPlusStyles([...plusStyles, cl.active]);
        }
    }, [count]);


    return (
        <div className={btnStyles.join(' ')} onClick={() => {
            addToCart(pizza);
            setCount(count + 1);
        }}>
            <div className={plusStyles.join(' ')}></div>
            {children}
            {count > 0
                ? <div className={cl.count}>{count}</div>
                : null
            }
        </div>
    );
};

export default CountBtn;
