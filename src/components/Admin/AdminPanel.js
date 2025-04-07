import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import { Navigate } from 'react-router-dom';

function AdminPanel() {
  const { addNews } = useAuth();
  const [newsItem, setNewsItem] = useState({ title: '', content: '' });
  const [image, setImage] = useState(null);
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(() => {
    // In a real app, this would fetch from an API
    setStudents([
      { id: 1, name: 'Петренко Іван Михайлович', group: 'КН-31', status: 'Активний' },
      { id: 2, name: 'Коваленко Марія Петрівна', group: 'КН-32', status: 'Академвідпустка' },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStudent.id) {
      // Update existing student
      setStudents(students.map(s => 
        s.id === currentStudent.id ? currentStudent : s
      ));
    } else {
      // Add new student
      setStudents([...students, { ...currentStudent, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Ви впевнені, що хочете видалити цього студента?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };


  const handleNewsSubmit = (e) => {
    e.preventDefault();
    addNews(newsItem);
    setNewsItem({ title: '', content: '' });
    alert('News added successfully!');
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload to backend
    console.log('Image:', image);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Admin Panel</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h4>Управління студентами</h4>
          <div className="row">
            <div className="col-md-12">
              <button 
                className="btn btn-primary mb-3"
                onClick={() => {
                  setCurrentStudent({
                    name: '',
                    group: 'КН-31',
                    status: 'Активний'
                  });
                  setShowModal(true);
                }}
              >
                Додати нового студента
              </button>

              {/* Modal for Add/Edit Student */}
              {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          {currentStudent.id ? 'Редагувати студента' : 'Додати студента'}
                        </h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label className="form-label">ПІБ</label>
                            <input
                              type="text"
                              className="form-control"
                              value={currentStudent.name}
                              onChange={(e) => setCurrentStudent({...currentStudent, name: e.target.value})}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Група</label>
                            <select
                              className="form-select"
                              value={currentStudent.group}
                              onChange={(e) => setCurrentStudent({...currentStudent, group: e.target.value})}
                            >
                              <option value="КН-31">КН-31</option>
                              <option value="КН-32">КН-32</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Статус</label>
                            <select
                              className="form-select"
                              value={currentStudent.status}
                              onChange={(e) => setCurrentStudent({...currentStudent, status: e.target.value})}
                            >
                              <option value="Активний">Активний</option>
                              <option value="Академвідпустка">Академвідпустка</option>
                            </select>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                              Закрити
                            </button>
                            <button type="submit" className="btn btn-primary">
                              {currentStudent.id ? 'Зберегти' : 'Додати'}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <table className="table">
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
                      <td>
                        <span className={`badge ${student.status === 'Активний' ? 'bg-success' : 'bg-warning'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary me-1"
                          onClick={() => {
                            setCurrentStudent(student);
                            setShowModal(true);
                          }}
                        >
                          Редагувати
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(student.id)}
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
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h4>Add News</h4>
          <form onSubmit={handleNewsSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="News Title"
                value={newsItem.title}
                onChange={(e) => setNewsItem({...newsItem, title: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="News Content"
                value={newsItem.content}
                onChange={(e) => setNewsItem({...newsItem, content: e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-primary">Add News</button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4>Add Gallery Image</h4>
          <form onSubmit={handleImageSubmit}>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary">Upload Image</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;