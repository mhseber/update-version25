import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <h1>AuthLayout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;