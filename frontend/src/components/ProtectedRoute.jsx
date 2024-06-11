import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo = '/signin' }) => {
    const authToken = localStorage.getItem('authToken');
    return authToken ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
