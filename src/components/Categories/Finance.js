
import React from 'react';

function Finance() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Фінанси</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Загальна статистика</h5>
              <div className="mt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Надходження за місяць:</span>
                  <strong>425,000 грн</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Заборгованості:</span>
                  <strong>58,000 грн</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Стипендіальний фонд:</span>
                  <strong>180,000 грн</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Платежі за навчання</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Студент</th>
                    <th>Група</th>
                    <th>Сума</th>
                    <th>Статус</th>
                    <th>Термін</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Петренко І.М.</td>
                    <td>КН-31</td>
                    <td>15,000 грн</td>
                    <td><span className="badge bg-success">Сплачено</span></td>
                    <td>01.02.2024</td>
                  </tr>
                  <tr>
                    <td>Коваленко М.П.</td>
                    <td>КН-32</td>
                    <td>15,000 грн</td>
                    <td><span className="badge bg-warning">Очікується</span></td>
                    <td>15.02.2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Стипендії</h5>
              <div className="list-group mt-3">
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Академічна стипендія</h6>
                      <small>Кількість отримувачів: 120</small>
                    </div>
                    <span>2,000 грн</span>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Соціальна стипендія</h6>
                      <small>Кількість отримувачів: 25</small>
                    </div>
                    <span>2,500 грн</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Додаткові витрати</h5>
              <div className="list-group mt-3">
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Матеріальна допомога</h6>
                      <small>Січень 2024</small>
                    </div>
                    <span>15,000 грн</span>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Премії</h6>
                      <small>Грудень 2023</small>
                    </div>
                    <span>45,000 грн</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
