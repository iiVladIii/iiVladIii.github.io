
import React from 'react';
import Loader from "../Components/Loader/Loader";
import PizzaCard from "../Components/PizzaCard";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import axios from "axios";
import Sorting from "../Components/Sorting";
import Header from "../Components/Header";
import {useContext} from "react";
import {cartContext} from "../App";

const HomePage = () => {
    const { cartCounter, cartPrice } = useContext(cartContext)



    const [pizzas, setPizzas] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();
    const newPage = (index) => {
        switch (index) {
            case 1:
                if (page < maxPage) {
                    setPage(page + 1);
                }
                break;
            case -1:
                if (page > 1) {
                    setPage(page - 1);
                }
                break;
        }
    };
    const [fetchPizzas, isLoading, error] = useFetching(async () => {
        const checkResponse = await axios.get('https://629bd467e9358232f7529957.mockapi.io/items');
        setMaxPage(Math.ceil(checkResponse.data.length / 8));
        const response = await axios.get(`https://629bd467e9358232f7529957.mockapi.io/items?page=${page}&limit=8`);
        setPizzas(response.data);
    });
    useEffect(() => {
        fetchPizzas();
    }, [page]);
    return (
        <div className={'home-wrap'}>
            <Header
                cartPrice={cartPrice}
                cartCounter={cartCounter}
                phrase={'Самая вкусная пицца во вселенной'}
            />
            <Sorting/>
            {isLoading
            ? <Loader/>
            : <div className="pizzas">
                {pizzas.map((pizza) =>
                    <PizzaCard pizza={pizza} key={pizza.id}/>
                )}
            </div>
        }
            <button onClick={()=> {newPage(-1)}}>prev</button>
            <button onClick={()=> {newPage(1)}}>next</button>
        </div>
    );
};

export default HomePage;
