import { useState, useEffect, createContext } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../Utils/FireBase/FIreBase";


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(() => null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
      
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])
    

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}