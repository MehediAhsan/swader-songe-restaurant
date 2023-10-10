import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useState, useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userUpdateProfile =(name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            console.log(error);
            // ...
          });
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
        logOut,
        userUpdateProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;