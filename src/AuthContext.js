import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [news, setNews] = useState([]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const addNews = (newsItem) => {
        setNews(prevNews => [newsItem, ...prevNews]);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, news, addNews }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);