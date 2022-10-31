import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //registation user
    const registerForm = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login user
    const loginForm = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //onStateChange User login or logout

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    //update profile 
    const updateProfileUser =(name, imgUrl)=>{
        setLoading(true)
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
        })
    }

    //Google PropUp login 
    const googleProvider =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //facebook login with popup
    const facebookProvider = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //Logout user
    const userLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {user, loading, registerForm, loginForm, userLogout, updateProfileUser, googleProvider, facebookProvider}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;