import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [news, setNews] = useState([]);
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents(prev => [...prev, student]);
    };

    const updateStudent = (id, updatedData) => {
        setStudents(prev => prev.map(student => 
            student.id === id ? { ...student, ...updatedData } : student
        ));
    };

    const deleteStudent = (id) => {
        setStudents(prev => prev.filter(student => student.id !== id));
    };

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const addNews = (newsItem) => {
        setNews(prevNews => [newsItem, ...prevNews]);
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            login, 
            logout, 
            news, 
            addNews,
            students,
            addStudent,
            updateStudent,
            deleteStudent 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);