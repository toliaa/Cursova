
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    
    // Data states
    const [students, setStudents] = useState([
        { id: 1, name: 'Петренко Іван Михайлович', group: 'КН-31', status: 'Активний' },
        { id: 2, name: 'Коваленко Марія Петрівна', group: 'КН-32', status: 'Академвідпустка' }
    ]);
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'Ковальчук О.П.', department: "Комп'ютерних наук", position: 'Професор', workload: '750' },
        { id: 2, name: 'Мельник І.В.', department: 'Математики', position: 'Доцент', workload: '600' }
    ]);
    const [schedule, setSchedule] = useState([
        { id: 1, time: '8:30-10:05', subject: 'Вища математика', teacher: 'Мельник І.В.', group: 'КН-31', day: 'Понеділок' },
        { id: 2, time: '10:20-11:55', subject: 'Програмування', teacher: 'Ковальчук О.П.', group: 'КН-31', day: 'Середа' }
    ]);
    const [reports, setReports] = useState([
        { id: 1, title: 'Успішність КН-31', date: '2024-01-15', author: 'Ковальчук О.П.' },
        { id: 2, title: 'Відвідуваність за грудень', date: '2024-01-10', author: 'Мельник І.В.' }
    ]);
    const [finances, setFinances] = useState({
        monthlyIncome: 425000,
        debts: 58000,
        scholarshipFund: 180000,
        payments: [
            { id: 1, student: 'Петренко І.М.', group: 'КН-31', amount: 15000, status: 'Сплачено', deadline: '2024-02-01' },
            { id: 2, student: 'Коваленко М.П.', group: 'КН-32', amount: 15000, status: 'Очікується', deadline: '2024-02-15' }
        ]
    });
    const [support, setSupport] = useState([
        { id: 1, topic: 'Проблема з доступом', status: 'В обробці', date: '2024-01-15' },
        { id: 2, topic: 'Питання щодо розкладу', status: 'Вирішено', date: '2024-01-10' }
    ]);

    // Students operations
    const addStudent = (student) => {
        setStudents(prev => [...prev, { ...student, id: Date.now() }]);
    };

    const updateStudent = (id, updatedData) => {
        setStudents(prev => prev.map(student => 
            student.id === id ? { ...student, ...updatedData } : student
        ));
    };

    const deleteStudent = (id) => {
        setStudents(prev => prev.filter(student => student.id !== id));
    };

    // Teachers operations
    const addTeacher = (teacher) => {
        setTeachers(prev => [...prev, { ...teacher, id: Date.now() }]);
    };

    const updateTeacher = (id, updatedData) => {
        setTeachers(prev => prev.map(teacher => 
            teacher.id === id ? { ...teacher, ...updatedData } : teacher
        ));
    };

    // Schedule operations
    const updateSchedule = (newSchedule) => {
        setSchedule(newSchedule);
    };

    // Reports operations
    const addReport = (report) => {
        setReports(prev => [...prev, { ...report, id: Date.now() }]);
    };

    // Finance operations
    const updateFinances = (newFinances) => {
        setFinances(newFinances);
    };

    // Support operations
    const addSupportTicket = (ticket) => {
        setSupport(prev => [...prev, { ...ticket, id: Date.now() }]);
    };

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
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
            reports,
            addReport,
            finances,
            updateFinances,
            support,
            addSupportTicket
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
