
import React from 'react';

function Reports() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Звіти</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління звітами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Звіти по успішності</li>
            <li className="list-group-item">Відвідуваність</li>
            <li className="list-group-item">Статистика</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reports;
