import './App.scss';
import Header from "./Components/Header";
import Sorting from "./Components/Sorting";
import {useState} from "react";

function App() {
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
