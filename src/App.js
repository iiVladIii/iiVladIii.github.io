import './App.scss';
import React, {createContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

export const cartContext = createContext();

function App() {
    const [pizzasInCart, setPizzasInCart] = useState([
        {
            category: 0,
            id: "0",
            imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            price: 803,
            rating: 4,
            size: 26,
            title: "Пепперони Фреш с перцем",
            type: 1,
            count: 2
        },
        {
            category: 0,
            id: "1",
            imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            price: 245,
            rating: 6,
            size: 40,
            title: "Сырная",
            type: 0,
            count: 1
        },
    ]);
    useEffect(()=> {
        console.log(pizzasInCart);
    }, [pizzasInCart])
    // console.log(pizzasInCart);
    const [cartPrice, setCartPrice] = useState(0)
    const [cartCounter, setCartCounter] = useState(0)

    return (
        <div className="App">
            <cartContext.Provider value={{pizzasInCart, setPizzasInCart, cartPrice, setCartPrice, cartCounter, setCartCounter}}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </cartContext.Provider>
        </div>
    );
}

export default App;
