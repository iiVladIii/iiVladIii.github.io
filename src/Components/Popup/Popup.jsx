import React from 'react';
import cl from './Popup.module.scss';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSortValue} from "../../store/pizzaSortSlice";

const Popup = ({visible, setVisible, variables}) => {
    const dispatch = useDispatch()
    const sortValue = useSelector(state => state.sort.sortValue)
    const activeCategoryStyles = [cl.point, cl.active];
    const rootClasses = [cl.popup];

    if (visible) {
        rootClasses.push(cl.active);
        let listener = function () {
            setVisible(false);
            window.removeEventListener('scroll', listener, false);
        };
        window.addEventListener('scroll', listener, false);
    }

    const main = (index) => {
        dispatch(setSortValue(index))
        setVisible(false)
    };
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.popupContent}>
                {variables.map((el, index) =>
                    <div className={sortValue === index ? activeCategoryStyles.join(' ') : cl.point} key={index}
                         onClick={(event) => {
                             main(index);
                             event.stopPropagation();
                         }}>{el}</div>
                )}
            </div>
        </div>
    );
};

export default Popup;
