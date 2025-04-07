
import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

function Teachers() {
    const { teachers, addTeacher, updateTeacher } = useAuth();
    const [newTeacher, setNewTeacher] = useState({ 
        name: '', 
        department: '', 
        position: '',
        courses: []
    });
    const [editing, setEditing] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            updateTeacher(editing.id, newTeacher);
            setEditing(null);
        } else {
            addTeacher(newTeacher);
        }
        setNewTeacher({ name: '', department: '', position: '', courses: [] });
    };

    return (
        <div className="container mt-5 pt-5">
            <h2>Управління викладачами</h2>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ПІБ викладача"
                            value={newTeacher.name}
                            onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Кафедра"
                            value={newTeacher.department}
                            onChange={(e) => setNewTeacher({...newTeacher, department: e.target.value})}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Посада"
                            value={newTeacher.position}
                            onChange={(e) => setNewTeacher({...newTeacher, position: e.target.value})}
                        />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary w-100">
                            {editing ? 'Оновити' : 'Додати'}
                        </button>
                    </div>
                </div>
            </form>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ПІБ</th>
                            <th>Кафедра</th>
                            <th>Посада</th>
                            <th>Курси</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.name}</td>
                                <td>{teacher.department}</td>
                                <td>{teacher.position}</td>
                                <td>{teacher.courses.join(', ')}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() => {
                                            setEditing(teacher);
                                            setNewTeacher(teacher);
                                        }}
                                    >
                                        Редагувати
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Teachers;
