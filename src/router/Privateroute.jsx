import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children})=> {
    const {user,loding}=useContext(UserProvider)
    if(loding){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default Privateroute;