import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {navPath} from './path';
import Error from "../components/Error";

function RoutesNav() {
    return (
        <Routes>
            {
                navPath.map( (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))
            }
            <Route element={Error} />
        </Routes>
    )
}

export default RoutesNav;
