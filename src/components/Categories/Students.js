
import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

function Students() {
    const { students, addStudent, updateStudent, deleteStudent } = useAuth();
    const [newStudent, setNewStudent] = useState({ name: '', group: '', status: 'Активний' });
    const [editing, setEditing] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            updateStudent(editing.id, newStudent);
            setEditing(null);
        } else {
            addStudent(newStudent);
        }
        setNewStudent({ name: '', group: '', status: 'Активний' });
    };

    return (
        <div className="container mt-5 pt-5">
            <h2>Управління студентами</h2>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ПІБ студента"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Група"
                            value={newStudent.group}
                            onChange={(e) => setNewStudent({...newStudent, group: e.target.value})}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={newStudent.status}
                            onChange={(e) => setNewStudent({...newStudent, status: e.target.value})}
                        >
                            <option value="Активний">Активний</option>
                            <option value="Відрахований">Відрахований</option>
                            <option value="Академвідпустка">Академвідпустка</option>
                        </select>
                    </div>
                    <div className="col-md-2">
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
                            <th>Група</th>
                            <th>Статус</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.group}</td>
                                <td>{student.status}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() => {
                                            setEditing(student);
                                            setNewStudent(student);
                                        }}
                                    >
                                        Редагувати
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Видалити
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

export default Students;
