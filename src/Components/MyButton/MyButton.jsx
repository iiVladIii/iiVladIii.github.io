import React from 'react';
import cl from './MyButton.module.scss'
import {useNavigate} from "react-router-dom";

const MyButton = ({children, way, type}) => {
    const navigate = useNavigate()
    const styles = () => {
        switch (type) {
            case 0: return null
            case 1: return {color: 'white', backgroundColor: '#FE5F1E', border: 'none'}
            case 2: return {color: 'white', backgroundColor: '#282828', border: 'none'}
        }
    }
    return (
            <div style={styles()} className={cl.myBtn} onClick={() => navigate(way)}>
                {children}
            </div>
    );
};

export default MyButton;
