
import React from 'react';

function Schedule() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Розклад занять</h2>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <div className="list-group-item">
                  <h6>Фільтри</h6>
                  <select className="form-select mb-2">
                    <option>Оберіть групу</option>
                    <option>КН-31</option>
                    <option>КН-32</option>
                    <option>КН-33</option>
                  </select>
                  <select className="form-select">
                    <option>Поточний тиждень</option>
                    <option>Наступний тиждень</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Час</th>
                    <th>Понеділок</th>
                    <th>Вівторок</th>
                    <th>Середа</th>
                    <th>Четвер</th>
                    <th>П'ятниця</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:30-10:05</td>
                    <td>Вища математика<br/><small>доц. Мельник І.В.</small></td>
                    <td>-</td>
                    <td>Програмування<br/><small>проф. Ковальчук О.П.</small></td>
                    <td>Фізика<br/><small>доц. Петренко В.М.</small></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>10:20-11:55</td>
                    <td>Бази даних<br/><small>доц. Іванова Т.С.</small></td>
                    <td>Веб-технології<br/><small>ст.викл. Сидоренко О.В.</small></td>
                    <td>-</td>
                    <td>Програмування<br/><small>проф. Ковальчук О.П.</small></td>
                    <td>Англійська мова<br/><small>викл. Шевченко М.І.</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
