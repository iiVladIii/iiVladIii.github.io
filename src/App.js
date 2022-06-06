import './App.scss';
import React from "react";
import Header from "./Components/Header";
import Sorting from "./Components/Sorting";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import axios from "axios";
import Loader from "./Components/Loader/Loader";
import PizzaCard from "./Components/PizzaCard";

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [typeOfPizzas, setTypeOfPizzas] = useState([]);
    const [fetchPizzas, isLoading, error] = useFetching(async () => {
        const response = await axios.get('https://629bd467e9358232f7529957.mockapi.io/items');
        setPizzas(response.data);
    });

    const title = 'Все пиццы';
    useEffect(() => {
        fetchPizzas();
    }, []);


    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Sorting/>
                {isLoading
                    ? <Loader/>
                    : <div className="pizzas">
                        {pizzas.map((pizza) =>
                            <PizzaCard pizza={pizza} key={pizza.id}/>
                        )}
                    </div>
                }
                //pagination
            </div>
        </div>
    );
}

export default App;
