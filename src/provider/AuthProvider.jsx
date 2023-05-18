import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {  getAuth,   createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,  signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createNewUser = (email, password) => {


        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    };

    const loginUser = (email , password)=> {
        return signInWithEmailAndPassword(auth, email ,password)
    }
    
    const logout = () => {
        return signOut(auth)
    }
   

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            


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
        loginUser


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;