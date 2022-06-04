import {React, useState } from 'react';

const Sorting = () => {
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="sorting">
            <div className="categories">
                <ul>
                    {categories.map((category, index) =>
                        <li
                            key={index}
                            className={activeCategory === index ? 'active' : ''}
                            onClick={()=> setActiveCategory(index)}
                        >
                            {category}
                        </li>
                    )}
                </ul>
            </div>
            {/*<select name="" id="">*/}
            {/*    <option value="">По популярности</option>*/}
            {/*    <option value="">По цене</option>*/}
            {/*    <option value="">По алфавиту</option>*/}
            {/*</select>*/}
        </div>
    );
};

export default Sorting;
