import React, {useCallback, useMemo} from 'react';
import Loader from "../Components/Loader/Loader";
import PizzaCard from "../Components/PizzaCard";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import Sorting from "../Components/Sorting";
import Header from "../Components/Header";
import {useDispatch, useSelector} from 'react-redux';
import {cartInfo} from "../store/cartSlice";
import PizzaService from "../API/PizzaService";


const HomePage = () => {
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const cartPrice = useSelector(state => state.cart.cartPrice);
    const sortValue = useSelector(state => state.sort.sortValue);
    const dispatch = useDispatch();


    const [pizzas, setPizzas] = useState([]);
    const [category, setCategory] = useState(0);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(2);
    const [maxElementsOnPage, setMaxElementsOnPage] = useState(8);

    const sortByCategory = () => {
        switch (category) {
            case 0:
                return '';
            case 1:
                return 1;
            case 2:
                return 0;
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return 4;
            case 6:
                return 5;
        }
    };
    const sortByValue = () => {
        switch (sortValue) {
            case 0:
                return 'rating&order=desc';
            case 1:
                return 'rating&order=asc';
            case 2:
                return 'price&order=desc';
            case 3:
                return 'price&order=asc';
            case 4:
                return 'title&order=desc';
            case 5:
                return 'title&order=asc';
        }
    };

    const onPage = (str) => {
        switch (str) {
            case 'next':
                if (page < maxPage) {
                    setPage(page + 1);
                }
                break;
            case 'prev':
                if (page > 1) {
                    setPage(page - 1);
                }
                break;
        }
    };
    const [fetchPizzas, isLoading, error] = useFetching(async () => {
        // setMaxPage(await PizzaService.getPages(maxElementsOnPage));
        setPizzas(await PizzaService.getSortPizzas(sortByCategory(), maxElementsOnPage, page, sortByValue()));

    });

    useEffect(() => {
        // fetchPizzas();
        dispatch(cartInfo());
    }, [page]);

    useMemo(() => {
        fetchPizzas();
    }, [category, sortValue, page]);


    return (
        <div className={'home-wrap'}>
            <Header
                cartPrice={cartPrice}
                cartCounter={cartCounter}
                phrase={'Самая вкусная пицца во вселенной'}
            />
            <Sorting setCategory={setCategory}/>
            {isLoading
                ? <Loader/>
                : <div className="pizzas">
                    {pizzas.map((pizza) =>
                        <PizzaCard pizza={pizza} key={pizza.id}/>
                    )}
                </div>
            }
            <div className="btnWrap">
                <button className={'pagBtn'} onClick={() => onPage('prev')}>Назад</button>
                <button className={'pagBtn'} onClick={() => onPage('next')}>Далее</button>
            </div>

        </div>
    );
};

export default HomePage;
