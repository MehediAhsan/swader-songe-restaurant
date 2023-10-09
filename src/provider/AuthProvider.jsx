import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,displayName);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;