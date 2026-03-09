import { createContext, useContext, useState } from 'react';

const Context = createContext({});

export function useAuth() {
    return useContext(Context);
}

export function AuthProvider({ children }: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <Context.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </Context.Provider>
    );
}
