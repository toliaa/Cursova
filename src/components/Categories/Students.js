
import React from 'react';

function Students() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Студенти</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Управління студентами</h5>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item">
                  <h6>Пошук студентів</h6>
                  <input type="text" className="form-control mb-2" placeholder="Пошук за ПІБ" />
                  <select className="form-select">
                    <option>Всі групи</option>
                    <option>КН-31</option>
                    <option>КН-32</option>
                    <option>КН-33</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item">
                  <h6>Швидкі дії</h6>
                  <button className="btn btn-primary btn-sm mb-2 w-100">Додати нового студента</button>
                  <button className="btn btn-outline-secondary btn-sm w-100">Експорт списку</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h5>Останні дії</h5>
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
                <tr>
                  <td>Петренко Іван Михайлович</td>
                  <td>КН-31</td>
                  <td><span className="badge bg-success">Активний</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">Редагувати</button>
                    <button className="btn btn-sm btn-outline-danger">Видалити</button>
                  </td>
                </tr>
                <tr>
                  <td>Коваленко Марія Петрівна</td>
                  <td>КН-32</td>
                  <td><span className="badge bg-warning">Академвідпустка</span></td>
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
  );
}

export default Students;
