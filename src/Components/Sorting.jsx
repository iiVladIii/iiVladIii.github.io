import {React, useState} from 'react';
import Popup from "./Popup/Popup";
import {useSelector} from "react-redux";

const Sorting = ({setCategory, ...props}) => {
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
    const [modal, setModal] = useState(false)
    const variables = ['Популярности (DESC)', 'Популярности (ASC)', 'Цене (DESC)', 'Цене (ASC)', 'Алфавиту (DESC)', 'Алфавиту (ASC)'];

    const sortValue = useSelector(state => state.sort.sortValue);

    const sortText = () => {
            switch (sortValue) {
                case 0: return variables[0]
                case 1: return variables[1]
                case 2: return variables[2]
                case 3: return variables[3]
                case 4: return variables[4]
                case 5: return variables[5]
            }
    }

    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="sorting">
            <div className="categories">
                <ul>
                    {categories.map((category, index) =>
                        <li
                            key={index}
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => {
                                setActiveCategory(index);
                                setCategory(index);
                            }}
                        >
                            {category}
                        </li>
                    )}
                </ul>
            </div>
            <div className="sort" onClick={()=> setModal(true)}>
                Сортировка по: {sortText()}
            </div>
            <Popup visible={modal} setVisible={setModal} variables={variables}/>
        </div>
    );
};

export default Sorting;
