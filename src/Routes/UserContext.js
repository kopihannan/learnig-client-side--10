import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const registerForm = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, registerForm}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;