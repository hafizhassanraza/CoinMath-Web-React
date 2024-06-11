import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = ({ redirectTo = '/' }) => {
    const authToken = localStorage.getItem('authToken');
    return authToken ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default GuestRoute;
