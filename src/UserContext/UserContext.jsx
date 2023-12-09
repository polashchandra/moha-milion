import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const UserProvider = createContext(null)

const UserContext = ({ children }) => {

    const [User, setUser] = useState(null);
    const [loding, setloding]=useState(true);

    const createUser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createSignIn = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = ()=>{
       setloding(true)
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, craentuser => {
            setUser(craentuser)
            console.log(craentuser)
            setloding(false)
        });
        return () => {
            Unsubscribe()
        }
    })
     const userinfo = { User, createUser, createSignIn,logout,loding }

    return (
        <UserProvider.Provider value={userinfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node
}