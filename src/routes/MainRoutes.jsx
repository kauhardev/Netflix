import React from 'react';
import Home from '../components/Header/Home';
import Product from '../components/Product';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
    const routes = [
        {
            id:1,
            link: '/',
            element: <Home/>
        },
        {
            id:2,
            link: '/product',
            element: <Product/>
        },
    ]
    return (
        <Routes>
            {
                routes.map((el) => (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;