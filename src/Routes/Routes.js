import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('../Pages/Login'))

const Routing = () => {
    return(
        <Routes>
            <Route path='*' element={<Login />} />
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default Routing;