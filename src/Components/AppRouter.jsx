import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Route path="*" element={<Navigate replace to="/main"/>}/>
        </Routes>
    );
};

export default AppRouter;
