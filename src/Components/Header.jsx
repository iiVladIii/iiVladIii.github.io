import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <div className="logo__img">
                    <img src="./img/logo.svg" alt=""/>
                </div>
                <div className="logo__text">
                    React Pizza<br/>
                    <span>Самая вкусная пицца во вселенной</span>
                </div>
            </div>
            <div className="logo__info">
                1
            </div>
        </header>
    );
};

export default Header;
