
import React from 'react';

function Reports() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Звіти</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Успішність студентів</h5>
              <div className="list-group mt-3">
                <button className="list-group-item list-group-item-action">Загальний звіт по групах</button>
                <button className="list-group-item list-group-item-action">Індивідуальні показники</button>
                <button className="list-group-item list-group-item-action">Академічні заборгованості</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Відвідуваність</h5>
              <div className="list-group mt-3">
                <button className="list-group-item list-group-item-action">Щомісячний звіт</button>
                <button className="list-group-item list-group-item-action">По предметах</button>
                <button className="list-group-item list-group-item-action">Критичні показники</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Викладацька активність</h5>
              <div className="list-group mt-3">
                <button className="list-group-item list-group-item-action">Навантаження</button>
                <button className="list-group-item list-group-item-action">Виконання плану</button>
                <button className="list-group-item list-group-item-action">Наукова робота</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mt-4">
        <div className="card-body">
          <h5>Останні згенеровані звіти</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Назва звіту</th>
                <th>Дата створення</th>
                <th>Автор</th>
                <th>Дії</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Успішність КН-31 за весняний семестр</td>
                <td>2024-01-15</td>
                <td>Ковальчук О.П.</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-1">Переглянути</button>
                  <button className="btn btn-sm btn-outline-secondary">Завантажити</button>
                </td>
              </tr>
              <tr>
                <td>Відвідуваність за грудень 2023</td>
                <td>2024-01-10</td>
                <td>Мельник І.В.</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-1">Переглянути</button>
                  <button className="btn btn-sm btn-outline-secondary">Завантажити</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
