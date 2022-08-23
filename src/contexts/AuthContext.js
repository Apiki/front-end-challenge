import React, { createContext } from 'react';

import { useAuth } from '../hook/useAuth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const {
        user
    } = useAuth();

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}