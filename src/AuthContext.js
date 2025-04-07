import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [students, setStudents] = useState([
        { id: 1, name: 'Петренко Іван', group: 'КН-31', status: 'Активний', grades: { math: 85, programming: 92 } },
        { id: 2, name: 'Коваленко Марія', group: 'КН-32', status: 'Активний', grades: { math: 78, programming: 88 } }
    ]);

    const [teachers, setTeachers] = useState([
        { id: 1, name: 'Ковальчук О.П.', department: "Комп'ютерних наук", position: 'Професор', courses: ['Програмування', 'Алгоритми'] },
        { id: 2, name: 'Мельник І.В.', department: 'Математики', position: 'Доцент', courses: ['Математичний аналіз'] }
    ]);

    const [schedule, setSchedule] = useState([
        { id: 1, time: '8:30-10:05', subject: 'Математичний аналіз', teacher: 'Мельник І.В.', group: 'КН-31', room: '305' },
        { id: 2, time: '10:20-11:55', subject: 'Програмування', teacher: 'Ковальчук О.П.', group: 'КН-31', room: '401' }
    ]);

    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'Зміни в розкладі', content: 'Заняття з програмування перенесено на четвер', date: '2024-01-20' },
        { id: 2, title: 'Важлива інформація', content: 'Нагадування про дедлайн курсових робіт', date: '2024-01-18' }
    ]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const addStudent = (student) => {
        setStudents(prev => [...prev, { ...student, id: Date.now() }]);
    };

    const updateStudent = (id, data) => {
        setStudents(prev => prev.map(student =>
            student.id === id ? { ...student, ...data } : student
        ));
    };

    const deleteStudent = (id) => {
        setStudents(prev => prev.filter(student => student.id !== id));
    };

    const addTeacher = (teacher) => {
        setTeachers(prev => [...prev, { ...teacher, id: Date.now() }]);
    };

    const updateTeacher = (id, data) => {
        setTeachers(prev => prev.map(teacher =>
            teacher.id === id ? { ...teacher, ...data } : teacher
        ));
    };

    const addAnnouncement = (announcement) => {
        setAnnouncements(prev => [...prev, { ...announcement, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    };

    const updateSchedule = (newSchedule) => {
        setSchedule(newSchedule);
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            students,
            addStudent,
            updateStudent,
            deleteStudent,
            teachers,
            addTeacher,
            updateTeacher,
            schedule,
            updateSchedule,
            announcements,
            addAnnouncement
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);