import './App.scss';
import Header from "./Components/Header";
import Sorting from "./Components/Sorting";
import {useState} from "react";

function App() {
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Sorting/>
            </div>
        </div>
    );
}

export default App;
