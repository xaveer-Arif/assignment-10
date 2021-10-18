import initializeAuthentication from '../Pages/Firebse/Firebase.init';

import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth'
import { useState , useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
    const  [user, setUser] = useState({})
    const auth = getAuth()

    // google sign in 
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
        })
        
    }


    // log out
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }


    // on auth change 
    useEffect(() => {
        onAuthStateChanged(auth , user => {
            if(user){
                setUser(user)
            }
        })
    },[])







    return {
        user,
        googleSignIn,
        logOut

    }
}
export default useFirebase