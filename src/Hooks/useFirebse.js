import initializeAuthentication from '../Pages/Firebse/Firebase.init';

import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState , useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
    const  [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()

    // google sign in 
    const googleSignIn = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
        .finally(() => setIsLoading(false))
    }
    // email and password
   

    // log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }


    // on auth change 
    useEffect(() => {
        onAuthStateChanged(auth , user => {
            if(user){
                setUser(user)
            }
            setIsLoading(false);
        })
        
    },[])







    return {
        user,
        setUser,
        isLoading,
        googleSignIn,
        logOut

    }
}
export default useFirebase