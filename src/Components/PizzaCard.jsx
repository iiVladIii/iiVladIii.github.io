import React, {useEffect} from 'react';
import {useState} from "react";

const PizzaCard = ({pizza}) => {
    const [firstTypeStyle, setFirstTypeStyle] = useState(['card__menu-type']);
    const [secondTypeStyle, setSecondTypeStyle] = useState(['card__menu-type']);
    const checkedTypeStyle = ['card__menu-type', 'checked'];
    const activeTypeStyle = ['card__menu-type', 'checked', 'active'];


    const [firstSizeStyle, setFirstSizeStyle] = useState(['card__menu-size']);
    const [secondSizeStyle, setSecondSizeStyle] = useState(['card__menu-size']);
    const [thirdSizeStyle, setThirdSizeStyle] = useState(['card__menu-size']);
    const checkedSizeStyle = ['card__menu-size', 'checked'];
    const activeSizeStyle = ['card__menu-size', 'checked', 'active'];

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0)

    const checkTypes = () => {
        if (pizza.types[0] === 0) {
            setFirstTypeStyle(checkedTypeStyle);
            activeTypeBtn(0);
        }
        if (pizza.types[0] === 1) {
            setSecondTypeStyle(checkedTypeStyle);
            activeTypeBtn(1);
        }
        if (pizza.types[1] === 1) {
            setSecondTypeStyle(checkedTypeStyle);
        }
    };
    const checkSizes = () => {
        for (let i = 0; i<pizza.sizes.length; i++) {
            switch (pizza.sizes[i]) {
                case 26:
                    setFirstSizeStyle(checkedSizeStyle)
                    setActiveSize(0)
                    break;
                case 30:
                    setSecondSizeStyle(checkedSizeStyle)
                    setActiveSize(1)
                    break;
                case 40:
                    setThirdSizeStyle(checkedSizeStyle)
                    setActiveSize(2)
                    break;
            }
        }
        console.log(activeSize);
    }

    const activeTypeBtn = (index) => {
        setActiveType(index);
        if (pizza.types[0] === 0) {
            switch (index) {
                case 0:
                    setFirstTypeStyle(activeTypeStyle);
                    if (pizza.types[1]) {
                        setSecondTypeStyle(checkedTypeStyle);
                    }
                    break;
                case 1:
                    setActiveType(0);
                    if (pizza.types[1]) {
                        setActiveType(1);
                        setSecondTypeStyle(activeTypeStyle);
                        setFirstTypeStyle(checkedTypeStyle);
                    }
                    break;
            }
        } if (pizza.types[0] === 1) {
            setActiveType(1);
            setSecondTypeStyle(activeTypeStyle);
        }
    };

    const activeSizeBtn = (index) => {
            switch (index) {
                case 0:
                    if (pizza.sizes.includes(26)) {
                        checkSizes()
                        setFirstSizeStyle(activeSizeStyle)
                        setActiveSize(0)
                    }
                    break;
                case 1:
                    if (pizza.sizes.includes(30)) {
                        checkSizes()
                        setSecondSizeStyle(activeSizeStyle)
                        setActiveSize(1)
                    }
                    break;
                case 2:
                    if (pizza.sizes.includes(40)) {
                        checkSizes()
                        setThirdSizeStyle(activeSizeStyle)
                        setActiveSize(2)
                    }
                    break;
            }
    }
    useEffect(() => {
        checkSizes();
        checkTypes();
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
        </div>
    );
};

export default PizzaCard;
