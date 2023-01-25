import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/config'
// const MOCK_USERS = [
//     {
//         email:'profe@coder.com',
//         password:'admin'
//     },
//     {
//         email:'tutor@coder.com',
//         password:'coder'
//     },
//     {
//         email:'john@coder.com',
//         password:'coder'
//     }
// ]


export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [user,setUser] = useState({
        email:null,
        logged: false,
        error:null
    })


    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential)=> {
            setUser({
                email: userCredential.user.email,
                logged: true,
                error: null
            })
        })
        .catch((error)=> {
            setUser({
                email: null,
                logged: false,
                error: error.message
            })
        })

        
        // const match = MOCK_USERS.find(user => user.email === values.email)
    
        // if(!match) {
        //     setUser({
        //         email: null,
        //         logged:false,
        //         error: 'No se encuentra ese usuario'
        //     })
        // }

        // if(match.password === values.password) {
        //     setUser({
        //         email: match.email,
        //         logged: true,
        //         error: null
        //     })
        // } else {
        //     setUser({
        //         email: null,
        //         logged:false,
        //         error: 'Password inválido'
        //     })
        // }
    }

    const logout = () => {
        signOut(auth)
            .then(()=> {
                setUser({
                    email:'',
                    logged: false,
                    error:null
                })
            })
        
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential)=> {
                setUser({
                    email: userCredential.user.email,
                    logged: true,
                    error: null
                })
            })
            .catch((error)=> {
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })

    }

    return (
        <LoginContext.Provider value={{user, login, logout, register}}>
            {children}
        </LoginContext.Provider>
    )
}