import React from 'react';

function Students() {
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
                  <input type="text" className="form-control mb-2" placeholder="Пошук за ПІБ" readOnly />
                  <select className="form-select" disabled>
                    <option>Всі групи</option>
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
                <tr>
                  <td>Петренко Іван Михайлович</td>
                  <td>КН-31</td>
                  <td><span className="badge bg-success">Активний</span></td>
                </tr>
                <tr>
                  <td>Коваленко Марія Петрівна</td>
                  <td>КН-32</td>
                  <td><span className="badge bg-warning">Академвідпустка</span></td>
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