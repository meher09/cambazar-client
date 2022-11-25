import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //Sign In with Google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }



    // auth State Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        signInWithGoogle,
        logout,
        loading,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;