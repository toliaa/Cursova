
import React from 'react';

function Teachers() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Викладачі</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Управління викладацьким складом</h5>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item">
                  <h6>Пошук викладачів</h6>
                  <input type="text" className="form-control mb-2" placeholder="Пошук за ПІБ" />
                  <select className="form-select">
                    <option>Всі кафедри</option>
                    <option>Кафедра комп'ютерних наук</option>
                    <option>Кафедра математики</option>
                    <option>Кафедра фізики</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h6>Статистика</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Всього викладачів:</span>
                    <strong>45</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Професорів:</span>
                    <strong>12</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Доцентів:</span>
                    <strong>23</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h5>Список викладачів</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ПІБ</th>
                  <th>Кафедра</th>
                  <th>Посада</th>
                  <th>Навантаження</th>
                  <th>Дії</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ковальчук Олександр Петрович</td>
                  <td>Комп'ютерних наук</td>
                  <td>Професор</td>
                  <td>750 год</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">Профіль</button>
                    <button className="btn btn-sm btn-outline-secondary">Розклад</button>
                  </td>
                </tr>
                <tr>
                  <td>Мельник Ірина Василівна</td>
                  <td>Математики</td>
                  <td>Доцент</td>
                  <td>600 год</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">Профіль</button>
                    <button className="btn btn-sm btn-outline-secondary">Розклад</button>
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

export default Teachers;
