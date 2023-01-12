import React from 'react';

import {useNavigate} from "react-router-dom";

const Header = ({ phrase ,cartPrice, cartCounter }) => {
    const navigate = useNavigate()
    return (
        <header>
            <div className="logo" onClick={() => navigate('/main') }>
                <div className="logo__img">
                  <img src="./img/logo.svg" alt=""/>
                </div>
                <div className="logo__text">
                    Pizza<br/>
                    <span>{phrase}</span>
                </div>
            </div>
            {cartPrice >= 0
            ?  <div className="info">
                    <div className="info__cart-price">{cartPrice}₽</div>
                    <hr/>
                    <a href='/cart' className="info__cart-btn"><img src="./img/shopping-cart.svg" alt=""/>{cartCounter}</a>
                </div>
            : ''
            }
        </header>
    );
};

export default Header;
