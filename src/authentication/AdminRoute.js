import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAmin from '../hooks/useAmin';

const AdminRoute = () => {
    const [admin] = useAmin();
    if (!admin) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
};

export default AdminRoute;