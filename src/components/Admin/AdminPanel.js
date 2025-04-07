
import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Navigate } from 'react-router-dom';

function AdminPanel() {
  const { user, addNews } = useAuth();
  const [newsItem, setNewsItem] = useState({ title: '', content: '' });
  const [image, setImage] = useState(null);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

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
              <button className="btn btn-primary mb-3">Додати нового студента</button>
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
                  <tr>
                    <td>Петренко Іван Михайлович</td>
                    <td>КН-31</td>
                    <td><span className="badge bg-success">Активний</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">Редагувати</button>
                      <button className="btn btn-sm btn-outline-danger">Видалити</button>
                    </td>
                  </tr>
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
