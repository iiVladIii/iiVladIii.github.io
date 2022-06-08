import React, {useEffect} from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewItem} from "../store/cartSlice";


const PizzaCard = ({pizza}) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const addToCart = (pizza) => {
        let size = 0;
        switch (activeSize) {
            case 0:
                size = 26;
                break;
            case 1:
                size = 30;
                break;
            case 2:
                size = 40;
                break;
        }
        const selectedPizza = {
            id: pizza.id,
            imageUrl: pizza.imageUrl,
            price: pizza.price,
            size: size,
            title: pizza.title,
            type: activeType,
        };
        dispatch(addNewItem(selectedPizza));
    };
    const quantityInCart = (item) => {
        let count = 0;
        cartItems.map((element) => {
            if (element.id === item.id) {
                const c = element.count;
                count = count + element.count;
            }
        });
        let variable = count !== 0 ? count : null;
        return variable;
    };

    const [firstTypeStyle, setFirstTypeStyle] = useState(['card__menu-type']);
    const [secondTypeStyle, setSecondTypeStyle] = useState(['card__menu-type']);
    const [firstSizeStyle, setFirstSizeStyle] = useState(['card__menu-size']);
    const [secondSizeStyle, setSecondSizeStyle] = useState(['card__menu-size']);
    const [thirdSizeStyle, setThirdSizeStyle] = useState(['card__menu-size']);
    const checkedStyle = 'checked';
    const activeStyle = 'active';

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const checkTypes = () => {
        if (pizza.types[0] === 0) {
            setFirstTypeStyle([...firstTypeStyle, checkedStyle]);
        }
        if (pizza.types[0] === 1) {
            setSecondTypeStyle([...secondTypeStyle, checkedStyle]);
        }
        if (pizza.types[1] === 1) {
            setSecondTypeStyle([...secondTypeStyle, checkedStyle]);
        }
    };
    const checkSizes = () => {
        for (let i = 0; i < pizza.sizes.length; i++) {
            switch (pizza.sizes[i]) {
                case 26:
                    setFirstSizeStyle(['card__menu-size', checkedStyle]);
                    break;
                case 30:
                    setSecondSizeStyle(['card__menu-size', checkedStyle]);
                    break;
                case 40:
                    setThirdSizeStyle(['card__menu-size', checkedStyle]);
                    break;
            }
        }
    };

    const [firstActive, setFirstActive] = useState(true);

    const firstActivate = () => {
        if (firstActive) {
            switch (pizza.types[0]) {
                case 0:
                    setFirstTypeStyle(['card__menu-type', checkedStyle, activeStyle]);
                    setActiveType(0);
                    break;
                case 1:
                    setSecondTypeStyle(['card__menu-type', checkedStyle, activeStyle]);
                    setActiveType(1);
                    break;
            }
            switch (pizza.sizes[0]) {
                case 26:
                    setFirstSizeStyle(['card__menu-size', checkedStyle, activeStyle]);
                    setActiveSize(0);
                    break;
                case 30:
                    setSecondSizeStyle(['card__menu-size', checkedStyle, activeStyle]);
                    setActiveSize(1);
                    break;
                case 40:
                    setThirdSizeStyle(['card__menu-size', checkedStyle, activeStyle]);
                    setActiveSize(2);
            }
        }
        setFirstActive(false);
    };

    const activeTypeBtn = (index) => {
        setActiveType(index);
        if (pizza.types[0] === 0) {
            switch (index) {
                case 0:
                    setFirstTypeStyle([...firstTypeStyle, activeStyle]);
                    if (pizza.types[1]) {
                        setSecondTypeStyle([secondTypeStyle[0], secondTypeStyle[1]]);
                    }
                    break;
                case 1:
                    setActiveType(0);
                    if (pizza.types[1]) {
                        setActiveType(1);
                        setSecondTypeStyle([...secondTypeStyle, activeStyle]);
                        setFirstTypeStyle([firstTypeStyle[0], firstTypeStyle[1]]);
                    }
                    break;
            }
        }
        if (pizza.types[0] === 1) {
            setActiveType(1);
            setSecondTypeStyle([...secondTypeStyle, activeStyle]);
        }
    };

    const activeSizeBtn = (index) => {
        switch (index) {
            case 0:
                if (pizza.sizes.includes(26)) {
                    checkSizes();
                    setFirstSizeStyle([...firstSizeStyle, activeStyle]);
                    setActiveSize(0);
                }
                break;
            case 1:
                if (pizza.sizes.includes(30)) {
                    checkSizes();
                    setSecondSizeStyle([...secondSizeStyle, activeStyle]);
                    setActiveSize(1);
                }
                break;
            case 2:
                if (pizza.sizes.includes(40)) {
                    checkSizes();
                    setThirdSizeStyle([...thirdSizeStyle, activeStyle]);
                    setActiveSize(2);
                }
                break;
        }
    };

    useEffect(() => {
        checkTypes();
        checkSizes();
        firstActivate();
    }, []);

    return (
        <div className="card" key={pizza.id}>
            <div className="card__img">
                <img src={pizza.imageUrl} alt="pizza-picture"/>
            </div>
            <div className="card__title"><h3>{pizza.title}</h3></div>
            <div className="card__menu">
                <div className={firstTypeStyle.join(' ')} onClick={() => activeTypeBtn(0)}>Тонкое</div>
                <div className={secondTypeStyle.join(' ')} onClick={() => activeTypeBtn(1)}>Традиционное</div>
                <div className={firstSizeStyle.join(' ')} onClick={() => activeSizeBtn(0)}>26 см.</div>
                <div className={secondSizeStyle.join(' ')} onClick={() => activeSizeBtn(1)}>30 см.</div>
                <div className={thirdSizeStyle.join(' ')} onClick={() => activeSizeBtn(2)}>40 см.</div>
            </div>
            <div className="card__price">
                <span>от {pizza.price} ₽</span>
                <div
                    onClick={() => addToCart(pizza)}>Добавить {quantityInCart(pizza) ? quantityInCart(pizza) : null}</div>
            </div>
        </div>
    );
};

export default PizzaCard;
