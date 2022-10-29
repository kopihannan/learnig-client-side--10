import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    
    //registation user
    const registerForm = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login user
    const loginForm = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //onStateChange User login or logout

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    //update profile 
    const updateProfileUser =(name, imgUrl)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
        })
    }

    //Logout user
    const userLogout = ()=>{
        return signOut(auth)
    }

    const authInfo = {user, registerForm, loginForm, userLogout, updateProfileUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;