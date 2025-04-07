
import React from 'react';
import { useAuth } from '../../AuthContext';
import './Dashboard.css';

function Dashboard() {
    const { user, students, teachers, announcements } = useAuth();

    return (
        <div className="dashboard-container container mt-5 pt-5">
            <h2>Панель управління</h2>
            
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Студенти</h5>
                            <p className="card-text">Загальна кількість: {students.length}</p>
                            <p className="card-text">
                                Активних: {students.filter(s => s.status === 'Активний').length}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Викладачі</h5>
                            <p className="card-text">Загальна кількість: {teachers.length}</p>
                            <p className="card-text">
                                Кафедр: {new Set(teachers.map(t => t.department)).size}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Оголошення</h5>
                            <p className="card-text">Активних: {announcements.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Останні оголошення</h5>
                            <div className="list-group">
                                {announcements.map(announcement => (
                                    <div key={announcement.id} className="list-group-item">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1">{announcement.title}</h6>
                                            <small>{announcement.date}</small>
                                        </div>
                                        <p className="mb-1">{announcement.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
