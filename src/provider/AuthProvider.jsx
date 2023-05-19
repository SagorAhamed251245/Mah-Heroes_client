import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {  getAuth,   createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,  signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const createNewUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    };

    const loginUser = (email , password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email ,password)
    }
    
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
   

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            setLoading(false)
            


        })

        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createNewUser, 
        updateUserProfile,
        logout,
        loginUser,
        loading


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;