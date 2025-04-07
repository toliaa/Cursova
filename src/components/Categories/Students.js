
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';

function Students() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const { user } = useAuth();

  useEffect(() => {
    // In a real app, this would fetch from an API
    setStudents([
      { id: 1, name: 'Петренко Іван Михайлович', group: 'КН-31', status: 'Активний' },
      { id: 2, name: 'Коваленко Марія Петрівна', group: 'КН-32', status: 'Академвідпустка' },
      { id: 3, name: 'Сидоренко Олег Васильович', group: 'КН-31', status: 'Активний' },
    ]);
  }, []);

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'all' || student.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="container mt-5 pt-5">
      <h2>Студенти</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Список студентів</h5>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="list-group">
                <div className="list-group-item">
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Пошук за ПІБ" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select 
                    className="form-select"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                  >
                    <option value="all">Всі групи</option>
                    <option value="КН-31">КН-31</option>
                    <option value="КН-32">КН-32</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ПІБ</th>
                  <th>Група</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.group}</td>
                    <td>
                      <span className={`badge ${student.status === 'Активний' ? 'bg-success' : 'bg-warning'}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
