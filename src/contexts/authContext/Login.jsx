import React, { useEffect, useState, useContext } from "react";
import { auth } from "../../Fbase";
import { onAuthStateChanged } from "firebase/auth";

//IGNORE
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const[currentUser, setCurrectUser]=useState(null)
    const[userLoggedIn, setUserLoggedIn]=useState(false)
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,initializeUser);
        return unsubscribe
    },[])

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
        }
        else{
            setCurrectUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)   
    }

    const value={
        currentUser,
        userLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}