
import React from 'react';

function Students() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Студенти</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління студентами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Список студентів</li>
            <li className="list-group-item">Додати нового студента</li>
            <li className="list-group-item">Групи</li>
            <li className="list-group-item">Успішність</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Students;
