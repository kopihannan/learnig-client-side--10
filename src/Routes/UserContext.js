import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from 'firebase/auth';

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

    //Google PropUp login 
    const googleProvider =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    //facebook login with popup
    const facebookProvider = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    //Logout user
    const userLogout = ()=>{
        return signOut(auth)
    }

    const authInfo = {user, registerForm, loginForm, userLogout, updateProfileUser, googleProvider, facebookProvider}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;