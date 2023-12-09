import React, { useContext } from 'react';
import { UserProvider } from '../UserContext/UserContext';


const Home = () => {
    const Authcontext=useContext(UserProvider);
    console.log(Authcontext)
    return (
        <div>
            <h1>this is home{Authcontext.name}</h1>
        </div>
    );
};

export default Home;