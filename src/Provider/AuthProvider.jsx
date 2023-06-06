import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import axios from "axios";


export const AuthContext = createContext('')
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, { displayName: name })
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                axios.post('http://localhost:5000/token', { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('jerin-parlour-token', data.data.token)
                        setLoading(false)
                    })
            }

            else{
                localStorage.removeItem('jerin-parlour-token')
            }

        });
        return () => {
            unsubscribe();
        }

    }, [])

    const logout = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const userValue = {
        register,
        updateUserProfile,
        verification,
        login,
        passwordReset,
        user,
        loading,
        logout,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={userValue} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;