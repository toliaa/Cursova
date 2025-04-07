
import React from 'react';

function Teachers() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Викладачі</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління викладачами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Список викладачів</li>
            <li className="list-group-item">Додати викладача</li>
            <li className="list-group-item">Кафедри</li>
            <li className="list-group-item">Навантаження</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
