import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <div className="grid place-content-center min-h-screen">
            <div className="loading loading-bars loading-md"></div>
        </div>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location} to={`/auth/login`}></Navigate>
};

export default PrivateRoute;